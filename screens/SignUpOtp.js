import React, { useContext, useState } from "react";
import { StatusBar, View, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import axios from "axios"; // Make sure axios is installed
import {
  StyledContainer,
  MainContainer,
  StyledFormArea,
  StyledTextInput,
  ButtonText,
  StyledButton,
  Colors,
  SignupOtpContent,
  SignupOtpText,
  MsgBox,
} from "../styles/styles";
import { Context } from "../store/context";

const { inputPlaceholder, backgroundColor } = Colors;

const SignUpOtp = ({ navigation }) => {
  const ctx = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ name: "", balance: "" });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledContainer>
        <StatusBar style="light" backgroundColor={backgroundColor} />
        <MainContainer>
          <SignupOtpContent>
            <SignupOtpText>Enter the OTP that was sent to you!</SignupOtpText>
          </SignupOtpContent>
          <Formik
            initialValues={{ otp: "" }}
            onSubmit={async (values, { setFieldError }) => {
              setLoading(true);

              try {
                const url = `https://53d9-102-89-33-58.ngrok-free.app/api/V1/skyshowNG/signUp?verify=${values.otp}`;
                const response = await axios.post(url);
                const result = response.data.data;
                const name = result.name;
                const email = result.email;
                const balance = result.wallet_Balance;
                setData({
                  name: name,
                  balance: balance,
                });

                // Check the response from your API for successful OTP verification
                if (result.message === "confirmed") {
                  const params = {
                    token: response.data.jwtToken,
                    wallet_Balance: balance,
                    name,
                    email,
                  };
                  ctx.saveCredential(params);
                  // Navigate to the home screen or any other screen as needed

                  navigation.navigate("MainContent", {
                    name: name,
                    balance: balance,
                    // screen: "Home",
                    // params: data,
                  });
                } else {
                  console.log("Incorrect OTP");
                  setFieldError("otp", "Incorrect OTP"); // Set an error message
                }
              } catch (error) {
                console.error("Error verifying OTP:", error.message);

                // Handle the API request error (e.g., network issues)
                setFieldError("otp", "Error verifying OTP"); // Set an error message
              } finally {
                setLoading(false);
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <StyledFormArea>
                <StyledTextInput
                  placeholder="* * * * * *"
                  placeholderTextColor={inputPlaceholder}
                  onChangeText={handleChange("otp")}
                  onBlur={handleBlur("otp")}
                  value={values.otp}
                  keyboardType="numeric"
                />
                {errors.otp && <MsgBox>{errors.otp}</MsgBox>}

                <StyledButton
                  onPress={handleSubmit}
                  disabled={loading}
                  style={{ marginTop: 20 }}
                >
                  {loading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <ButtonText>VERIFY</ButtonText>
                  )}
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
        </MainContainer>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default SignUpOtp;

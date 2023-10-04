import React, { useState } from "react";
import { StatusBar, View, Alert, ActivityIndicator } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import { useNavigation } from "@react-navigation/native";

import {
  StyledContainer,
  MainContainer,
  ButtonText,
  StyledButton,
  SignupOtpText,
  SignupOtpContent,
} from "../../styles/styles";

const ResetOptions = () => {
  const [chosenOption, setChosenOption] = useState("Number");
  const [loading, setLoading] = useState(false);

  const options = [
    { label: "Number", value: "Number" },
    { label: "Email", value: "Email" },
  ];

  const navigation = useNavigation();

  const sendOTP = async (option) => {
    try {
      // Simulate OTP sending (replace with actual OTP sending logic)
      // You can use setTimeout to simulate a delay
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay
      setLoading(false);

      navigation.navigate("ResetOtp", { option });

      Alert.alert("OTP Sent", `Check your ${option === "Email" ? "email" : "phone"} for the OTP.`);
    } catch (error) {
      Alert.alert("Error", "Failed to send code. Please try again.");
      setLoading(false);
    }
  };

  return (
    <StyledContainer>
      <StatusBar style="light" />
      <MainContainer>
        <SignupOtpContent>
          <SignupOtpText>
            An OTP would be sent to you to reset your password.
            Choose your preferred destination
          </SignupOtpText>
        </SignupOtpContent>

        <RadioForm
          radio_props={options}
          onPress={(value) => {
            setChosenOption(value);

          }}
          buttonSize={10}
          buttonColor={"#1350E8"}
          selectedButtonColor={"#1350E8"}
          labelStyle={{
            fontSize: 16,
            color: "#8B9CC8",
          }}
        />

        <StyledButton
          style={{ marginTop: 20 }}
          onPress={() => sendOTP(chosenOption)}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <ButtonText>CONTINUE</ButtonText>
          )}
        </StyledButton>
      </MainContainer>
    </StyledContainer>
  );
};

export default ResetOptions;

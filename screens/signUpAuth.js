import React, { useState, useEffect } from "react";
import { StatusBar, View, Alert, ActivityIndicator } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

// const client = new WebSocket ("ws://https://9e8b-102-88-35-220.ngrok-free.app:8080");

import {
  StyledContainer,
  MainContainer,
  ButtonText,
  StyledButton,
  SignupOtpText,
  SignupOtpContent,
} from "../styles/styles";
import { verifyEmailAndNumber } from "../util/auth";

const SignUpAuth = ({ route }) => {
  const [chosenOption, setChosenOption] = useState("Number");
  const [loading, setLoading] = useState(false);

  const { email, phoneNumber } = route.params;

  // const phoneNumber = credentials.phoneNumber;
  // const email = credentials.email;
  // console.log(phoneNumber, email);

  const options = [
    { label: `Number: ${phoneNumber}`, value: "Number" },
    { label: `Email: ${email}`, value: "Email" },
  ];

  const navigation = useNavigation();

  useEffect(() => {
    if (phoneNumber) {
      setChosenOption("Number");
    } else if (email) {
      setChosenOption("Email");
    }
  }, [phoneNumber, email]);

  const sendOTP = async (option) => {
    try {
      let response;
      if (option === "Number") {
        console.log(option, phoneNumber, "number");
        verifyEmailAndNumber(option, phoneNumber);
        navigation.navigate("SignUpOtp", { phoneNumber });
      }

      if (option === "Email") {
        console.log(option);

        // Send OTP via email
        console.log(option, email, "email");
        await verifyEmailAndNumber("Email", email);
        // Alert.alert("OTP Sent", "Check your email for the OTP.");
        navigation.navigate("SignUpOtp", { email });
      }

      // console.log(response.data);
    } catch (error) {
      Alert.alert("Error", "Failed to send code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledContainer>
      <StatusBar style="light" />
      <MainContainer>
        <SignupOtpContent>
          <SignupOtpText>
            A verification code would be sent to you to verify your account.
            Choose your preferred destination
          </SignupOtpText>
        </SignupOtpContent>

        <RadioForm
          radio_props={options}
          // initial={"Number"}
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
          onPress={sendOTP.bind(null, chosenOption)}
          disabled={loading} // Disable the button while loading
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

export default SignUpAuth;

import React, { useState, useEffect, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import { Octicons } from "@expo/vector-icons";
import axios from "axios";
import { useContext } from "react";

// Import styles and constants from another file
import {
  StyledContainer,
  InnerContainer,
  StyledFormArea,
  StyledTextInput,
  RightIcon,
  ButtonText,
  StyledButton,
  Colors,
  MsgBox,
  ToSignupPageBox,
  ToSignupPageText,
  TextLink,
  TextLinkContent,
} from "../styles/styles";
import { login } from "../util/auth";
import { Context } from "../store/context";
import { isEmail } from "../util/validator";

// Destructure constants from the Colors object
const { inputPlaceholder, backgroundColor } = Colors;

// Define the Login component

const Login = ({ navigation }) => {
  const ctx = useContext(Context);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  function validator(email) {
    if (!email) throw Error("Invalid Email check your input and try again");
  }

  const loginHandler = async () => {
    // validator(isEmail(userData.email));
    try {
      setIsButtonDisabled(true);
      console.log(userData);
      const result = await login(userData);
      console.log("result", result);
      const { name, wallet_Balance, email } = result.data;
      const params = {
        token: result.jwtToken,
        wallet_Balance,
        name,
        email
      };
      ctx.saveCredential(params);
      console.log(name, wallet_Balance, "57");
      console.log(result.status);
      if (result.status === "success") {
        // setUserData({ ...userData });
        navigation.navigate("MainContent", {
          email: userData.email,
          phoneNumber: userData.phoneNumber,
        });
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      // setSubmitting(false);
      // setTimeout(() => {
      setIsButtonDisabled(false);
      // }, 1000);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledContainer>
        <StatusBar style="light" backgroundColor={backgroundColor} />
        <InnerContainer>
          <StyledFormArea>
            <StyledTextInput
              placeholder="Enter email"
              placeholderTextColor={inputPlaceholder}
              onChangeText={(text) => {
                setUserData({ ...userData, email: text });
              }}
            />
            {/* Password Input */}
            <StyledTextInput
              placeholder="Password"
              placeholderTextColor={inputPlaceholder}
              onChangeText={(text) => {
                setUserData({ ...userData, password: text });
              }}
            />
            <MsgBox>{errorMessage}</MsgBox>
            {/* Handle submit and activity indicator */}
            {!isButtonDisabled ? (
              <StyledButton onPress={loginHandler}>
                <ButtonText>LOG IN</ButtonText>
              </StyledButton>
            ) : (
              <StyledButton disabled={true}>
                <ActivityIndicator size="large" color={inputPlaceholder} />
              </StyledButton>
            )}
            <ToSignupPageBox>
              <ToSignupPageText>
                Don't have an account already?
              </ToSignupPageText>
              <TextLink onPress={() => navigation.navigate("Signup")}>
                <TextLinkContent>Signup</TextLinkContent>
              </TextLink>
            </ToSignupPageBox>
            <TextLink onPress={() => navigation.navigate("ResetOptions")}>
              <TextLinkContent>Reset Password</TextLinkContent>
            </TextLink>
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </SafeAreaView>
  );
};

// MyTextInput component

export default Login;

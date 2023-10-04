import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, ActivityIndicator, Alert } from "react-native";
import { Formik } from "formik";
import axios from "axios";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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

import { SafeAreaView } from "react-native-safe-area-context";
import { createUser } from "../util/auth";
import {
  isEmail,
  isValidName,
  isValidPassword,
  isValidPhone,
} from "../util/validator";

const { inputPlaceholder, backgroundColor } = Colors;

const Signup = () => {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passConfirm: "",
  });

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [messageType, setMessageType] = useState();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // const handleMessage = (message, type = "FAILED") => {
  //   setMessage(message);
  //   setMessageType(type);
  // };

  function validator(email, name, phoneNumber, password) {
    if (!name) throw Error("Invalid username");
    if (!email) throw Error("Invalid Email check your input and try again");
    if (!phoneNumber)
      throw Error(`number must be 11 characeter long starting with '0'`);
    if (!password.status) throw Error(password.message);
  }

  const handleSubmit = async () => {
    setIsButtonDisabled(true);

    const isValidEmail = isEmail(userData.email);
    const isPhoneNumber = isValidPhone(userData.phoneNumber);
    const isPassword = isValidPassword(userData.password, userData.passConfirm);
    const isUsername = isValidName(userData.name);

    try {
      // validator(isValidEmail, isUsername, isPassword, isPhoneNumber);
      const response = await createUser(userData);
      if (response.status === "sucess") {
        setUserData({ ...userData });
        navigation.navigate("SignUpAuth", {
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
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
          <StatusBar style="light" backgroundColor={backgroundColor} />
          <InnerContainer>
            <StyledFormArea>
              <StyledTextInput
                placeholder="Full name"
                placeholderTextColor={inputPlaceholder}
                onChangeText={(text) => {
                  setUserData({ ...userData, name: text });
                }}
                // onBlur={handleBlur("name")}
                value={userData.name}
                keyboardType="default"
              />
              <StyledTextInput
                placeholder="Email"
                placeholderTextColor={inputPlaceholder}
                onChangeText={(text) => {
                  setUserData({ ...userData, email: text });
                }}
                // onBlur={handleBlur("email")}
                value={userData.email}
                keyboardType="email-address"
              />
              <StyledTextInput
                placeholder="Phone number"
                placeholderTextColor={inputPlaceholder}
                onChangeText={(text) => {
                  setUserData({ ...userData, phoneNumber: text });
                }}
                // onBlur={handleBlur("phoneNumber")}
                value={userData.phoneNumber}
                keyboardType="numeric"
              />
              <MyTextInput
                placeholder="Password"
                placeholderTextColor={inputPlaceholder}
                onChangeText={(text) => {
                  setUserData({ ...userData, password: text });
                }}
                // onBlur={handleBlur("password")}
                value={userData.password}
                secureTextEntry={hidePassword}
                togglePasswordVisibility={() => setHidePassword(!hidePassword)}
              />
              <MyTextInput
                placeholder="Confirm password"
                placeholderTextColor={inputPlaceholder}
                onChangeText={(text) => {
                  setUserData({ ...userData, passConfirm: text });
                }}
                // onBlur={handleBlur("passConfirm")}
                value={userData.passConfirm}
                secureTextEntry={hideConfirmPassword}
                togglePasswordVisibility={() =>
                  setHideConfirmPassword(!hideConfirmPassword)
                }
              />
              <MsgBox type={messageType}>{errorMessage}</MsgBox>
              {!isButtonDisabled ? (
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>CREATE ACCOUNT</ButtonText>
                </StyledButton>
              ) : (
                <StyledButton disabled={true}>
                  <ActivityIndicator size="large" color={inputPlaceholder} />
                </StyledButton>
              )}
              <ToSignupPageBox>
                <ToSignupPageText>Already have an account? </ToSignupPageText>
                <TextLink onPress={() => navigation.navigate("Login")}>
                  <TextLinkContent>Login</TextLinkContent>
                </TextLink>
              </ToSignupPageBox>
            </StyledFormArea>
          </InnerContainer>
        </StyledContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

const MyTextInput = ({ icon, togglePasswordVisibility, ...props }) => {
  return (
    <View>
      <StyledTextInput {...props} />
      {props.value.length > 0 && (
        <RightIcon onPress={togglePasswordVisibility}>
          <Octicons
            name={props.secureTextEntry ? "eye-closed" : "eye"}
            size={17}
            color={inputPlaceholder}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;

// const handleSignup = async (credentials, setSubmitting) => {
//   setIsButtonDisabled(true);

//   // Check if the user already exists and is unverified
//   const checkUserStatusUrl = 'https://your-api-url/checkUserStatus'; //  API endpoint

//   try {
//     const userStatusResponse = await axios.post(checkUserStatusUrl, {
//       email: credentials.email,
//       phoneNumber: credentials.phoneNumber,
//     });

//     const { userExists, isUnverified } = userStatusResponse.data;

//     if (userExists) {
//       if (isUnverified) {
//         // User exists but is unverified, so prompt them to verify
//         setUnverifiedUser(true);
//         handleMessage("Account exists but is unverified. Please check your email for verification instructions.", 'FAILED');
//       } else {
//         // User exists and is verified, don't allow account creation
//         handleMessage("User already exists. Please log in.", 'FAILED');
//       }
//     } else {
//       // User doesn't exist, proceed with account creation
//       const createAccountUrl = 'https://9e8b-102-88-35-220.ngrok-free.app/api/V1/skyshowNG/signUp';
//       const response = await axios.post(createAccountUrl, credentials);
//       const { message, status, data } = response.data;

//       if (status === 'success') {
//         setUserData({ ...userData, ...data });
//         navigation.navigate('SignUpAuth', { email: credentials.email, phoneNumber: credentials.phoneNumber });
//       } else {
//         handleMessage(message || 'An error occurred', status);
//         console.error("Request failed:", message);
//       }
//     }
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//     setSubmitting(false);
//     handleMessage("An error occurred. Check your network connection and try again", 'FAILED');
//   } finally {
//     setSubmitting(false);
//     setTimeout(() => {
//       setIsButtonDisabled(false);
//     }, 5000);
//   }
// };

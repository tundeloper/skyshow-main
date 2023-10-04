import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, ActivityIndicator, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";

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
} from "../../styles/styles";

import { SafeAreaView } from "react-native-safe-area-context";
import { isValidPassword } from "../../util/validator";

const { inputPlaceholder, backgroundColor } = Colors;

const ResetPassword = () => {
    const navigation = useNavigation();
    const route = useRoute();
    

  const [userData, setUserData] = useState({
    password: "",
    passConfirm: "",
  });

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [messageType, setMessageType] = useState();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSubmit = async () => {
    setIsButtonDisabled(true);

    const isPassword = isValidPassword(userData.password, userData.passConfirm);

    try {
        if (isPassword) {
            Alert.alert(
              "Password Updated",
              "Your password has been successfully updated.",
              [
                {
                  text: "OK",
                  onPress: () => {
                    navigation.navigate("Login"); 
                  },
                },
              ]
            );
          } else {
            setErrorMessage("Invalid password");
            setMessageType("FAILED");
          }
          
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
          <StatusBar style="light" backgroundColor={backgroundColor} />
          <InnerContainer>
            <NewPasswordTextContainer>
                    <NewPasswordText>Create A new Password</NewPasswordText>
            </NewPasswordTextContainer>
            <StyledFormArea>
              <MyTextInput
                placeholder="Password"
                placeholderTextColor={inputPlaceholder}
                onChangeText={(text) => {
                  setUserData({ ...userData, password: text });
                }}
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
                value={userData.passConfirm}
                secureTextEntry={hideConfirmPassword}
                togglePasswordVisibility={() =>
                  setHideConfirmPassword(!hideConfirmPassword)
                }
              />
              <MsgBox type={messageType}>{errorMessage}</MsgBox>
              {!isButtonDisabled ? (
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>UPDATE PASSWORD</ButtonText>
                </StyledButton>
              ) : (
                <StyledButton disabled={true}>
                  <ActivityIndicator size="large" color={inputPlaceholder} />
                </StyledButton>
              )}
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

export default ResetPassword;

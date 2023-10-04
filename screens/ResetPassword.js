import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { Formik } from "formik";
import { Octicons } from '@expo/vector-icons';

//////components--------
import {
  StyledContainer,
  StyledFormArea,
  StyledTextInput,
  ButtonText,
  StyledButton,
  Colors,
  MainContainer,
  SignupOtpContent,
  SignupOtpText,
  MsgBox
} from '../styles/styles';

const { inputPlaceholder, backgroundColor } = Colors;

const ResetPassword = ({ navigation }) => {
  // State to store the user's input
  const [userData, setUserData] = useState({ otp: '' });

  const handleResetPassword = async (values) => {
    try {
      // Define the API endpoint
      const apiUrl = 'https://5e20-102-88-35-220.ngrok-free.app/api/V1/skyshowNG/reset-password';

      // Prepare the request data
      const requestData = {
        otp: values.otp,
      };

      // Make the POST request
      const response = await axios.post(apiUrl, requestData);

      // Check the response status
      if (response.status === 200) {
        const responseData = response.data;
        // Handle the response data as needed
        console.log(responseData);
        navigation.navigate('Home');
      } else {
        // Handle unexpected status codes
        console.error('Unexpected status code:', response.status);
      }
    } catch (error) {
      // Handle network errors and other exceptions
      console.error('Error resetting password:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledContainer>
        <StatusBar style="light" backgroundColor={backgroundColor} />
        <MainContainer>
          <SignupOtpContent>
            <SignupOtpText>
              Enter the OTP that was sent to your email
            </SignupOtpText>
          </SignupOtpContent>
          <Formik
            initialValues={userData}
            onSubmit={(values) => {
              handleResetPassword(values); // Use the handleResetPassword function as the onSubmit handler
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <StyledTextInput
                  placeholder="Enter your OTP"
                  placeholderTextColor={inputPlaceholder}
                  onChangeText={handleChange('otp')}
                  onBlur={handleBlur('otp')}
                  value={values.otp}
                  keyboardType="numeric"
                />
                <MsgBox>hello</MsgBox>
                <StyledButton onPress={handleSubmit} style={{ marginTop: 20 }}>
                  <ButtonText>RESET</ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
        </MainContainer>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default ResetPassword;

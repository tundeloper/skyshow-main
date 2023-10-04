import React, { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { Octicons } from "@expo/vector-icons";
import Modal from "react-native-modal"; // Import the modal library

import {
  StyledContainer,
  StyledFormArea,
  StyledTextInput,
  RightIcon,
  ButtonText,
  StyledButton,
  Colors,
  MsgBox,
  TwoFaModal,
  StyledTextInputLabel,
} from "../../styles/styles";

const { inputPlaceholder } = Colors;

const TwoFa = ({ isVisible, closeModal }) => {
  const [userData, setUserData] = useState({
    password: "",
  });

  const [hidePassword, setHidePassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [messageType, setMessageType] = useState();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSubmit = async () => {
    setIsButtonDisabled(true);

    // Your validation and submission logic here
    try {
      // Validation logic here
      // For example, you can check if the password is correct
      const isPasswordCorrect = await checkPassword(userData.password);

      if (isPasswordCorrect) {
        // Close the modal upon successful password entry
        closeModal();
      } else {
        setErrorMessage("Incorrect password"); // Display an error message
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  // Function to simulate checking the password
  const checkPassword = async (enteredPassword) => {
    // Replace this with your actual password validation logic
    // For example, you can make an API request to verify the password
    return enteredPassword === "correct_password";
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={closeModal}>
        <TwoFaModal>
          <StyledTextInputLabel>Enter your password to verify you are the owner of thi account.</StyledTextInputLabel>
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
          <MsgBox type={messageType}>{errorMessage}</MsgBox>
          {!isButtonDisabled ? (
            <StyledButton onPress={handleSubmit}>
              <ButtonText>SUBMIT</ButtonText>
            </StyledButton>
          ) : (
            <StyledButton disabled={true}>
              <ActivityIndicator size="large" color={inputPlaceholder} />
            </StyledButton>
          )}
        </StyledFormArea>
        </TwoFaModal>
    </Modal>
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

export default TwoFa;

import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';



import {
  ButtonText,
  StyledButton,
  StyledTextInputLabel,
  Colors
 

} from '../styles/styles';

const { backgroundColor, inputPlaceholder, white } = Colors;

const ResetPinInputFields = () => {
  const [pin, setPin] = useState(['', '', '', '', '', '', '', '']); // Array to store 8-digit PIN
  const inputRefs = useRef([]);

  // Function to handle input change for each digit
  const handleInputChange = (index, text) => {
    if (/^[0-9]$/.test(text) || text === '') {
      const newPin = [...pin];
      newPin[index] = text;
      setPin(newPin);

      // Move to the next input field
      if (index < 7 && text !== '') {
        inputRefs.current[index + 1].focus();
      } else if (index > 0 && text === '') {
        // Handle backspace, clear the current input and move to the previous one
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // Function to handle backspace key press
  const handleBackspace = (index) => {
    if (index > 0) {
      const newPin = [...pin];
      newPin[index - 1] = '';
      setPin(newPin);
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <StyledTextInputLabel>Old  PIN</StyledTextInputLabel>
      <View style={styles.inputContainer}>
        {pin.slice(0, 4).map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            onChangeText={(text) => handleInputChange(index, text)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace(index);
              }
            }}
            value={digit}
            keyboardType="numeric"
            ref={(ref) => (inputRefs.current[index] = ref)}
            maxLength={1}
          />
        ))}
      </View>
      <StyledTextInputLabel>Create new  PIN</StyledTextInputLabel>
      <View style={styles.inputContainer}>
        {pin.slice(0, 4).map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            onChangeText={(text) => handleInputChange(index, text)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace(index);
              }
            }}
            value={digit}
            keyboardType="numeric"
            ref={(ref) => (inputRefs.current[index] = ref)}
            maxLength={1}
          />
        ))}
      </View>
      <StyledTextInputLabel>Confirm PIN</StyledTextInputLabel>
      <View style={styles.inputContainer}>
        {pin.slice(4, 8).map((digit, index) => (
          <TextInput
            placeholderTextColor={inputPlaceholder}
            key={index + 4}
            style={styles.input}
            onChangeText={(text) => handleInputChange(index + 4, text)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace(index + 4);
              }
            }}
            value={digit}
            keyboardType="numeric"
            ref={(ref) => (inputRefs.current[index + 4] = ref)}
            maxLength={1}
          />
        ))}
      </View>
      <StyledButton>
        <ButtonText>CREATE PIN</ButtonText>
      </StyledButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    width: 60,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    textAlign: 'center',
    fontSize: 18,
    margin: 5,
    borderRadius: 6,
    color: {white},
  },
});

export default ResetPinInputFields;

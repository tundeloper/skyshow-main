import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import { Octicons } from '@expo/vector-icons';

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
    StyledTextInputLabel,
    ScreenTitles,
    ContentMarginTop
} from '../styles/styles';


const { inputPlaceholder, backgroundColor } = Colors;

const ChangePassword = ({ navigation }) => {
  const [hidePassword, setHidePassword] = React.useState(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <StyledContainer>
                <StatusBar style="light" backgroundColor={backgroundColor} />
                <ScreenTitles>Change Password</ScreenTitles>
                    <ContentMarginTop/>
                <InnerContainer>
                        <Formik>
                        {({ handleChange, handleBlur, handleSubmit}) => (
                        <StyledFormArea>
                            <StyledTextInputLabel>Current password</StyledTextInputLabel>
                            <MyTextInput
                            placeholder="Current password"
                            placeholderTextColor={inputPlaceholder}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            secureTextEntry={hidePassword}
                            togglePasswordVisibility={() => setHidePassword(!hidePassword)}
                            />
                            <StyledTextInputLabel>New password</StyledTextInputLabel>
                            <MyTextInput
                            placeholder="Enter new password"
                            placeholderTextColor={inputPlaceholder}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            secureTextEntry={hidePassword}
                            togglePasswordVisibility={() => setHidePassword(!hidePassword)}
                            />
                            <StyledTextInputLabel>Confirm password</StyledTextInputLabel>
                            <MyTextInput
                            placeholder="Confirm new password"
                            placeholderTextColor={inputPlaceholder}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            secureTextEntry={hidePassword}
                            togglePasswordVisibility={() => setHidePassword(!hidePassword)}
                            />
                            {/* Message box */}
                            <MsgBox></MsgBox>
                            
                            <StyledButton onPress={handleSubmit}>
                            <ButtonText>Update password</ButtonText>
                            </StyledButton>

                            <ToSignupPageBox>
                            <ToSignupPageText>Can't remember your password?</ToSignupPageText>
                            </ToSignupPageBox>
                            <TextLink onPress={() => navigation.navigate("ResetOptions")}> 
                            <TextLinkContent>Reset Password</TextLinkContent>
                            </TextLink>
                        </StyledFormArea>
                        )}
                    </Formik>
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
      {props > 0 && (
        <RightIcon onPress={togglePasswordVisibility}>
          <Octicons name={props.secureTextEntry ? 'eye-closed' : 'eye'} size={24} color={inputPlaceholder} />
        </RightIcon>
      )}
    </View>
  );   
};

export default ChangePassword;

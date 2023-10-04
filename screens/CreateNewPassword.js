import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";

// formik---------
import { Formik } from "formik";

// icons ---------
import { Octicons } from '@expo/vector-icons';

//////components--------
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
    TextLinkContent
} from '../styles/styles';

//keyboardAvoidingWrapper ===


import { SafeAreaView } from "react-native-safe-area-context";

const { inputPlaceholder, backgroundColor } = Colors;

const Signup = ({navigation}) => {
    // State to store the user's input
    const [userData, setUserData] = useState({ password: '', confirmPassword: '' });

    // State to toggle password visibility
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
            <InnerContainer>
                <Formik initialValues={userData}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("Login");
                    }}   
                    >

                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                            {/* Password Input */}
                            <MyTextInput
                                placeholder="Enter new Password"
                                placeholderTextColor={inputPlaceholder}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                togglePasswordVisibility={() => setHidePassword(!hidePassword)} // Toggle the visibility of the password
                            />
                            {/* Confirmation Password Input */}
                            <MyTextInput
                                placeholder="Confirm password"
                                placeholderTextColor={inputPlaceholder}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                secureTextEntry={hideConfirmPassword}
                                togglePasswordVisibility={() => setHideConfirmPassword(!hideConfirmPassword)} // Toggle the visibility of the confirmation password
                            />
                            <MsgBox></MsgBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>CREATE ACCOUNT</ButtonText>
                            </StyledButton>
                            <ToSignupPageBox>
                                <ToSignupPageText>Already have an account? </ToSignupPageText>
                                <TextLink  onPress ={() => navigation.navigate("Login")}>
                                    <TextLinkContent>Login</TextLinkContent>
                                </TextLink>
                            </ToSignupPageBox>
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </ScrollView>
        </KeyboardAvoidingView>

    </SafeAreaView>
    );
};

//input field component
const MyTextInput = ({ icon, togglePasswordVisibility, ...props }) => {
    return (
        <View>
            <StyledTextInput {...props} />
            {/* Show the eye icon only when there is a password */}
            {props.value.length > 0 && (
                <RightIcon onPress={togglePasswordVisibility}>
                    <Octicons name={props.secureTextEntry ? 'eye-closed' : 'eye'} size={24} color={inputPlaceholder} />
                </RightIcon>
            )}
        </View>
    );
};

export default Signup;

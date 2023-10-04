import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity } from "react-native";
import { ThemeWrapper, useTheme } from "../styles/Theme";

//////components--------
import {
    StyledContainer,
    InnerContainer,
    ButtonText,
    StyledButton,
    Colors,
    GetStartedImg,
    GetStartedContainer,
    GetStartedTitle
} from '../styles/styles';

// Import the theme colors from your theme.js file
import {lightThemeColors, darkThemeColors} from '../styles/Theme'

const { backgroundColor } = Colors;


const GetStarted = ({ navigation }) => {
    const { isDarkMode } = useTheme();
    const theme = isDarkMode ? darkThemeColors : lightThemeColors; // Import the theme colors

    return (
        <ThemeWrapper isDarkMode={isDarkMode}>
            <StyledContainer style={{ backgroundColor: theme.backgroundColor }}>
                <StatusBar style={isDarkMode ? "light" : "dark"} backgroundColor={theme.backgroundColor} />
                <InnerContainer>
                    <GetStartedContainer>
                        <GetStartedImg source={require("../assets/images/welcome-image.png")} resizeMode="cover" />
                        <GetStartedTitle style={{ color: theme.white }}>Trade your gift cards, cryptocurrencies and pay bills. </GetStartedTitle>
                    </GetStartedContainer>
                    <StyledButton onPress={() => navigation.navigate("Login")} style={{ backgroundColor: theme.primary }}>
                        <ButtonText style={{ color: theme.white }}>GET STARTED</ButtonText>
                    </StyledButton>
                </InnerContainer>
            </StyledContainer>
        </ThemeWrapper>
    );
};

export default GetStarted;

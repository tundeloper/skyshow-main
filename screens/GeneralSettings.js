import React, { useState, useEffect } from "react";
import { StatusBar, View, Switch } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { lightThemeColors, darkThemeColors } from "../styles/Theme";

import {
    StyledContainer,
    MainContainer,
    ScreenTitles,
    ContentMarginTop,
    GenContainer,
    GenContent,
    GenContentLeft,
    GenContentRight,
    GenContenLeftTextBig,
    GenContenLeftTextSmall,
    GenThemeToggle,
    GenTogleText
} from '../styles/styles';

const GeneralSettings = ({ navigation }) => {
    const { isDarkMode, toggleTheme } = useTheme();
    const theme = isDarkMode ? darkThemeColors : lightThemeColors;

    useEffect(() => {
        // Fetch the selected theme from AsyncStorage when the component mounts
        async function fetchTheme() {
            try {
                const savedTheme = await AsyncStorage.getItem('theme');
                if (savedTheme !== null) {
                    // No need to toggle theme here, just update it based on the saved value
                    // toggleTheme(savedTheme === 'dark');
                }
            } catch (error) {
                console.error('Error fetching theme from AsyncStorage:', error);
            }
        }
        fetchTheme();
    }, []); // The empty dependency array ensures this effect runs only once

    const toggleSwitch = async () => {
        try {
          // Toggle the theme when the switch is pressed by calling toggleTheme
          toggleTheme(!isDarkMode);
    
          // Save the selected theme to AsyncStorage
          await AsyncStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
        } catch (error) {
          console.error('Error saving theme to AsyncStorage:', error);
        }
      };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StyledContainer>
                <StatusBar style={isDarkMode ? "light" : "dark"} backgroundColor={theme.backgroundColor} />
                <MainContainer>
                    <ScreenTitles>General Settings</ScreenTitles>
                    <ContentMarginTop />
                    <GenContainer>
                        <GenContent>
                            <GenContentLeft>
                                <GenContenLeftTextSmall style={{ color: theme.inputPlaceholder }}>Theme settings</GenContenLeftTextSmall>
                                <GenContenLeftTextBig style={{ color: theme.white }}>Light & dark theme</GenContenLeftTextBig>
                            </GenContentLeft>
                            <GenContentRight>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <GenTogleText style={{ color: theme.white }}>Light</GenTogleText>
                                    <Switch
                                        value={isDarkMode}
                                        onValueChange={toggleSwitch}
                                    />
                                    <GenTogleText style={{ color: theme.white }}>Dark</GenTogleText>
                                </View>
                            </GenContentRight>
                        </GenContent>
                        <GenContent>
                            <GenContentLeft>
                                <GenContenLeftTextSmall>Notification settings</GenContenLeftTextSmall>
                                <GenContenLeftTextBig>Turn on notifications</GenContenLeftTextBig>
                            </GenContentLeft>
                            <GenContentRight>
                                <GenTogleText>Light</GenTogleText>
                                <GenTogleText>Dark</GenTogleText>
                            </GenContentRight>
                        </GenContent>
                    </GenContainer>
                </MainContainer>
            </StyledContainer>
        </SafeAreaView>
    );
};

export default GeneralSettings;

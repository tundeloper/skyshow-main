import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text } from "react-native";

// ======icon==============
import { Octicons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

//////components--------
import {
    StyledContainer,
    Colors,
    MainContainer,
    ScreenTitles,
    ContentMarginTop,
    GenContainer,
    GenContent,
    GenContentLeft,
    GenContenLeftTextBig,
    GenContenLeftTextSmall,
    GenContentRight,
    GenThemeToggle,
    GenTogleText,
    SettingsIconRight,
    ContactSocialIcon,
    ContactLeft,
    SupportOption,

} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";

const { backgroundColor, inputPlaceholder} = Colors;
const ContactUs = ({navigation}) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StyledContainer>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
            <MainContainer>
                <ScreenTitles>Contact Us</ScreenTitles>
                <ContentMarginTop/>
                <GenContainer>
                    <SupportOption>
                        <ContactLeft>
                        <ContactSocialIcon>
                            <Ionicons name="chatbox-ellipses-outline" size={16} color={inputPlaceholder} />
                        </ContactSocialIcon>
                        <GenContentLeft>
                        <GenContenLeftTextSmall>WhatsApp Number</GenContenLeftTextSmall>
                            <GenContenLeftTextBig>08123456778</GenContenLeftTextBig>
                        </GenContentLeft>
                        </ContactLeft>
                        

                        <SettingsIconRight>
                                {/* <Octicons name="eye" size={16} color={inputPlaceholder} /> */}
                        </SettingsIconRight>
                    </SupportOption>
                  
                </GenContainer>
                <GenContainer>
                    <SupportOption>
                        <ContactLeft>
                        <ContactSocialIcon>
                            <Ionicons name="mail" size={16} color={inputPlaceholder} />
                        </ContactSocialIcon>
                        <GenContentLeft>
                        <GenContenLeftTextSmall>Email</GenContenLeftTextSmall>
                            <GenContenLeftTextBig>info@skyshow.ng</GenContenLeftTextBig>
                        </GenContentLeft>
                        </ContactLeft>
                        
                        <SettingsIconRight>
                                {/* <Octicons name="eye" size={16} color={inputPlaceholder} /> */}
                        </SettingsIconRight>
                    </SupportOption>
                </GenContainer>
            </MainContainer>
        </StyledContainer>
        </SafeAreaView>
    );
};


export default ContactUs;

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text, Switch } from "react-native";

// ======icon==============
import { Ionicons, Octicons } from '@expo/vector-icons';

//////components--------
import {
    StyledContainer,
    Colors,
    MainContainer,
    ScreenTitles,
    ContentMarginTop,
    SecuritySettingsContainer,
    SettingsIconLeft,
    SettingsIconRight,
    SecuritySettingsContainerText,
    SecuritySettingsContainerInner

} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import TwoFa from "./TwoFA/TwoFa";

const { backgroundColor, inputPlaceholder} = Colors;
const SecuritySettings = ({navigation}) => {
    const [twoFactorAuthEnabled, setTwoFactorAuthEnabled] = useState(false);
    const [isTwoFaModalVisible, setIsTwoFaModalVisible] = useState(false);
  
    const toggleTwoFactorAuth = () => {
      if (twoFactorAuthEnabled) {
        // If 2FA is already enabled, do nothing
        return;
      }
      
      // Show the 2FA modal when enabling 2FA
      setIsTwoFaModalVisible(true);
    };
  
    const closeTwoFaModal = () => {
      setIsTwoFaModalVisible(false);
      // After successful authentication, set 2FA to enabled
      setTwoFactorAuthEnabled(true);
    };



    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StyledContainer>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
            <MainContainer>
                <ScreenTitles>Security Settings</ScreenTitles>
                <ContentMarginTop/>
            {/* =======Change pin================= */}
                <SecuritySettingsContainer  onPress ={() => navigation.navigate("CreatePin")}>
                    <SecuritySettingsContainerInner>
                        <SettingsIconLeft><Octicons name="shield" size={16} color={inputPlaceholder} /></SettingsIconLeft>
                        <SecuritySettingsContainerText>Create pin</SecuritySettingsContainerText>
                    </SecuritySettingsContainerInner>
                    <SettingsIconRight><Ionicons name="caret-forward" size={16} color={inputPlaceholder} /></SettingsIconRight>
                </SecuritySettingsContainer>
             {/* =======Reset pin================= */}
             <SecuritySettingsContainer onPress ={() => navigation.navigate("ResetPin")}>   
                    <SecuritySettingsContainerInner>
                    <SettingsIconLeft><Octicons name="shield" size={16} color={inputPlaceholder} /></SettingsIconLeft>
                        <SecuritySettingsContainerText>Reset pin</SecuritySettingsContainerText>
                    </SecuritySettingsContainerInner>
                    <SettingsIconRight><Ionicons name="caret-forward" size={16} color={inputPlaceholder} /></SettingsIconRight>
                </SecuritySettingsContainer>
             {/* =======Change password================= */}
             <SecuritySettingsContainer onPress ={() => navigation.navigate("ChangePassword")}>
                    <SecuritySettingsContainerInner>
                        <SettingsIconLeft><Octicons name="lock" size={16} color={inputPlaceholder} /></SettingsIconLeft>
                        <SecuritySettingsContainerText>Change password</SecuritySettingsContainerText>
                    </SecuritySettingsContainerInner>
                    <SettingsIconRight><Ionicons name="caret-forward" size={16} color={inputPlaceholder} /></SettingsIconRight>
            </SecuritySettingsContainer>
             {/* =======2 factor authentication================= */}
             <SecuritySettingsContainer onPress ={() => navigation.navigate("ChangePassword")}>
                    <SecuritySettingsContainerInner>
                        <SettingsIconLeft><Octicons name="lock" size={16} color={inputPlaceholder} /></SettingsIconLeft>
                        <SecuritySettingsContainerText>2 factor authentication</SecuritySettingsContainerText>
                    </SecuritySettingsContainerInner>
                    <Switch
                        value={twoFactorAuthEnabled}
                        onValueChange={toggleTwoFactorAuth}
                    />
            </SecuritySettingsContainer>
            </MainContainer>
        </StyledContainer> 

        {/* =====Two factor aunthentication modal============== */}
            <TwoFa
            isVisible={isTwoFaModalVisible}
            closeModal={closeTwoFaModal}
            backdropOpacity={0.5} 
            transparent={true}  
            />

        </SafeAreaView>
    );
};


export default SecuritySettings;

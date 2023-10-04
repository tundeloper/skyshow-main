import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text } from "react-native";
// ======icon==============
import { Octicons } from '@expo/vector-icons';

//////components--------
import {
    StyledContainer,
    Colors,
    MainContainer,
    ScreenTitles,
    ContentMarginTop,
    NoBankAlert,
    NoBankAlertImage,
    NoBankAlertText,
    StyledButton,
    ButtonText,
    RateInfoText

} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";

const { backgroundColor, inputPlaceholder} = Colors;
const RateAlert = ({navigation}) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StyledContainer>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
            <MainContainer>
                <ScreenTitles>Rate List</ScreenTitles>
                <ContentMarginTop/>
                <NoBankAlert>
                    <NoBankAlertImage source={require("../assets/icons/clock.png")} />
                    <RateInfoText>No rate alert yet</RateInfoText>
                    <StyledButton onPress ={() => navigation.navigate("RateAlertForm")}>
                        <ButtonText>Set rate</ButtonText>
                    </StyledButton>
                </NoBankAlert>
            </MainContainer>
        </StyledContainer>
        </SafeAreaView>
    );
};


export default RateAlert;

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text } from "react-native";
// ======icon==============
import { Octicons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';


//////components--------
import {
    StyledContainer,
    Colors,
    MainContainer,
    ScreenTitles,
    ContentMarginTop,
    RateAlertItem,
    RateItemName,
    RateItemIcon

} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";

const { backgroundColor, inputPlaceholder, success} = Colors;


const AlertList = ({navigation}) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StyledContainer>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
            <MainContainer>
                <ScreenTitles>Rate List</ScreenTitles>
                <ContentMarginTop/>
              <RateAlertItem onPress ={() => {navigation.navigate("RateAlertDetails")}} >
                <RateItemName>Amazon Card</RateItemName>
                <RateItemIcon>
                    <Ionicons name="alert" color={success} size={16} />
                </RateItemIcon>
              </RateAlertItem>
            </MainContainer>
        </StyledContainer>
        </SafeAreaView>
    );
};


export default AlertList;

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
    ButtonText

} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";

const { backgroundColor, inputPlaceholder} = Colors;
const AddBankAccount = ({navigation}) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StyledContainer>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
            <MainContainer>
                <ScreenTitles>My Bank Account</ScreenTitles>
                <ContentMarginTop/>
                <NoBankAlert>
                    <NoBankAlertImage source={require("../assets/icons/bank.png")} />
                    <NoBankAlertText>No account added yet</NoBankAlertText>
                    <StyledButton onPress ={() => navigation.navigate("ChooseBank")}>
                        <ButtonText>Add Bank</ButtonText>
                    </StyledButton>
                </NoBankAlert>
            </MainContainer>
        </StyledContainer>
        </SafeAreaView>
    );
};


export default AddBankAccount;
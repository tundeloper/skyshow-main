import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text } from "react-native";

// ======icon==============
import { Octicons } from '@expo/vector-icons';

//////components--------
import {
    StyledContainer,
    Colors,
    ButtonStyle,
    ButtonText,
    MainContainer,
    ScreenTitles,
    GenerateCryptoContainer,
    GenerateCryptoIcon,
    GenerateCryptoTitle,
    GenerateCryptoDetails
} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";

const { backgroundColor, inputPlaceholder} = Colors;
const UsdtWallet = ({navigation}) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StyledContainer>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
            <MainContainer>
                <ScreenTitles>USDT Wallet </ScreenTitles>
                <GenerateCryptoContainer>
                    <GenerateCryptoIcon source={require("../assets/icons/cryptowallet.png")}/>
                    <GenerateCryptoTitle>Generate your SkyshowNg USDT {"\n"} wallet </GenerateCryptoTitle>
                    <GenerateCryptoDetails>A unique USDT adress would be{"\n"} generated for you</GenerateCryptoDetails>
                    <ButtonStyle onPress ={() => navigation.navigate("GenerateUsdtWallet")}>
                        <ButtonText>Generate USDT Wallet</ButtonText>
                    </ButtonStyle>
                </GenerateCryptoContainer>
            </MainContainer>
        </StyledContainer>
        </SafeAreaView>
    );
};


export default UsdtWallet;

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

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
const EthereumWallet = ({navigation}) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StyledContainer>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
            <MainContainer>
                <ScreenTitles>Ethereum Wallet</ScreenTitles>
                <GenerateCryptoContainer>
                    <GenerateCryptoIcon source={require("../assets/icons/cryptowallet.png")}/>
                    <GenerateCryptoTitle>Generate your SkyshowNg {"\n"}  Ethereum wallet </GenerateCryptoTitle>
                    <GenerateCryptoDetails>A unique ETHEREUM adress would be{"\n"} generated for you</GenerateCryptoDetails>
                    <ButtonStyle onPress ={() => navigation.navigate("GenerateEthereumWallet")}>
                        <ButtonText>Generate Ethereum Wallet</ButtonText>
                    </ButtonStyle>
                </GenerateCryptoContainer>
            </MainContainer>
        </StyledContainer>
        </SafeAreaView>
    );
};


export default EthereumWallet;

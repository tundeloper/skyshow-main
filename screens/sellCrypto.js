import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text } from "react-native";

//////components--------
import {
    StyledContainer,
    Colors,
    MainContainer,
    ScreenTitles,
    CryptoContainer,
    ContentMarginTop,
    CryptoLeftSide,
    CryptoLeftSideText,
    CryptoLefttSideImage,
    CryptoRightSide

} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";

const { backgroundColor, inputPlaceholder} = Colors;
const SellCrypto = ({navigation}) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StyledContainer>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
            <MainContainer>
                <ScreenTitles>Sell Cryptocurrency</ScreenTitles>
                <ContentMarginTop></ContentMarginTop>
                <CryptoContainer onPress ={() => navigation.navigate("BtcWallet")}>
                    <CryptoLeftSide>
                        <CryptoLefttSideImage source={require("../assets/icons/transact.png")} />
                        <CryptoLeftSideText>Sell BTC</CryptoLeftSideText>
                    </CryptoLeftSide>
                    <CryptoRightSide source={require("../assets/icons/btc.png")}/>
                </CryptoContainer>
                {/* === Ethereum wallet===== */}
                <CryptoContainer onPress ={() => navigation.navigate("EthereumWallet")}>
                    <CryptoLeftSide>
                        <CryptoLefttSideImage source={require("../assets/icons/transact3.png")} />
                        <CryptoLeftSideText>Sell ETHEREUM</CryptoLeftSideText>
                    </CryptoLeftSide>
                    <CryptoRightSide source={require("../assets/icons/ethereum.png")}/>
                </CryptoContainer>
                {/* === USDT wallet===== */}
                <CryptoContainer onPress ={() => navigation.navigate("UsdtWallet")}>
                    <CryptoLeftSide>
                        <CryptoLefttSideImage source={require("../assets/icons/transact2.png")} />
                        <CryptoLeftSideText>Sell USDT</CryptoLeftSideText>
                    </CryptoLeftSide>
                    <CryptoRightSide source={require("../assets/icons/usdt.png")}/>
                </CryptoContainer>
                
            </MainContainer>
        </StyledContainer>
        </SafeAreaView>
    );
};


export default SellCrypto;

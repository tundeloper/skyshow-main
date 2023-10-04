import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
// ======icon==============
import { Octicons } from '@expo/vector-icons';

//////components--------
import {
    StyledContainer,
    Colors,
    MainContainer,
    ScreenTitles,
    ContentMarginTop,
    ReceiptContaner,
    ReceiptHeader,
    ReceiptTop,
    ReceiptInfo,
    ReceiptHeaderTitle,
    ItemInfo,
    DateAndTime,
    DateAndTimeText,
    ReceiptMainDetails,
    MainDetailsTop,
    ProductInfo,
    TransactionDescription,
    DetailedReceipt,
    LeftText,
    RightText,
    ProductName,
    ProductCategory,

} from '../../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";

const { backgroundColor, inputPlaceholder, cardsBg, white} = Colors;

const GiftcardTransactionDetails = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StyledContainer>
                <StatusBar style="light" backgroundColor={backgroundColor} />
                <MainContainer>
                    <ScreenTitles>Transaction Details</ScreenTitles>
                    <ContentMarginTop />
                    <ReceiptContaner>
                        <Image source={require("../../assets/images/icon-logo.png")} />
                     <ReceiptTop>
                        <ReceiptHeader>
                            <ReceiptHeaderTitle>Transaction receipt</ReceiptHeaderTitle>
                        </ReceiptHeader>
                        <ReceiptInfo>
                            <ItemInfo>Amazon Gift card</ItemInfo>
                            <DateAndTime>
                                <DateAndTimeText >20-3, 2023</DateAndTimeText>
                                <DateAndTimeText>2:28pm</DateAndTimeText>
                            </DateAndTime>
                        </ReceiptInfo>
                     </ReceiptTop>
                     <ReceiptMainDetails>
                        <MainDetailsTop>
                        <Image source={require("../../assets/images/icon-logo.png")} />
                            <ProductInfo>
                                <ProductName>Product name</ProductName>
                                <ProductCategory>Product category</ProductCategory>
                            </ProductInfo>
                        </MainDetailsTop>
                        <TransactionDescription>
                            <DetailedReceipt>
                                <LeftText>Amount Received</LeftText>
                                <RightText>N243,000.00</RightText>
                            </DetailedReceipt>
                            <DetailedReceipt>
                                <LeftText>Amount on card</LeftText>
                                <RightText>$130</RightText>
                            </DetailedReceipt>
                            <DetailedReceipt>
                                <LeftText>Rate</LeftText>
                                <RightText>N230/$</RightText>
                            </DetailedReceipt>
                            <DetailedReceipt>
                                <LeftText>Cash value (NGN)</LeftText>
                                <RightText>N107,000.00</RightText>
                            </DetailedReceipt>
                            <DetailedReceipt>
                                <LeftText>Status</LeftText>
                                <RightText>Successful</RightText>
                            </DetailedReceipt>
                        </TransactionDescription>
                     </ReceiptMainDetails>
                    </ReceiptContaner>
                </MainContainer>
            </StyledContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  


});

export default GiftcardTransactionDetails;

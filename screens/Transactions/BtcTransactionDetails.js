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

} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";

const { backgroundColor, inputPlaceholder, cardsBg, white} = Colors;

const BtcTransactionDetails = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StyledContainer>
                <StatusBar style="light" backgroundColor={backgroundColor} />
                <MainContainer>
                    <ScreenTitles>My Bank Account</ScreenTitles>
                    <ContentMarginTop />
                    <View style={styles.receiptContaner}>
                        <Image source={require("../../assets/images/icon-logo.png")} />
                     <View style={styles.ReceiptTop}>
                        <View style={styles.ReceiptHeader}>
                            <Text>Transaction receipt</Text>
                        </View>
                        <View style={styles.receiptInfo}>
                            <Text style={styles.ItemInfo}>Amazon Gift card</Text>
                            <View style={styles.dateAndTime}>
                                <Text style={styles.dateText}>20-3, 2023</Text>
                                <Text style={styles.timeText}>2:28pm</Text>
                            </View>
                        </View>
                     </View>
                     <View style={styles.receiptMainDetails}>
                        <View style={styles.MainDetailsTop}>
                        <Image source={require("../../assets/images/icon-logo.png")} />
                            <View style={styles.ProductInfo}>
                                <Text style={styles.ProductName}>Product name</Text>
                                <Text style={styles.ProductCategory}>Product category</Text>
                            </View>
                        </View>
                        <View style={styles.TransactionDescription}>
                            <View style={styles.DetailedReceipt}>
                                <Text style={styles.LeftText}>Amount Received</Text>
                                <Text style={styles.RightText}>N243,000.00</Text>
                            </View>
                            <View style={styles.DetailedReceipt}>
                                <Text style={styles.LeftText}>Amount on card</Text>
                                <Text style={styles.RightText}>$130</Text>
                            </View>
                            <View style={styles.DetailedReceipt}>
                                <Text style={styles.LeftText}>Rate</Text>
                                <Text style={styles.RightText}>N230/$</Text>
                            </View>
                            <View style={styles.DetailedReceipt}>
                                <Text style={styles.LeftText}>Cash value (NGN)</Text>
                                <Text style={styles.RightText}>N107,000.00</Text>
                            </View>
                            <View style={styles.DetailedReceipt}>
                                <Text style={styles.LeftText}>Status</Text>
                                <Text style={styles.RightText}>Successful</Text>
                            </View>
                        </View>
                     </View>
                    </View>
                </MainContainer>
            </StyledContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    receiptContaner: {
        display: "flex",
        flexDirection: "column",
    },
    ReceiptHeader: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },
    receiptInfo: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: 10,
        backgroundColor: inputPlaceholder,
    },


});

export default BtcTransactionDetails;

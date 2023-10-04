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
    AlertItemDetails,
    AlertItemRow,
    AlertItemDetailsLeftText,
    AlertItemDetailsRightText,
    ItemDeleteBtn,
    ItemEditBtn,
    DeleteBtnText,
    ItemBtnText,
    ItemButtonsContainer

} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";

const { backgroundColor, inputPlaceholder} = Colors;
const RateAlertDetails = ({navigation}) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StyledContainer>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
            <MainContainer>
                <ScreenTitles>Alert Details</ScreenTitles>
                <ContentMarginTop/>
               <AlertItemDetails>
                    <AlertItemRow>
                        <AlertItemDetailsLeftText>Notification Type</AlertItemDetailsLeftText>
                        <AlertItemDetailsRightText>PUSH NOTIFICATION</AlertItemDetailsRightText>
                    </AlertItemRow>
                    <AlertItemRow>
                        <AlertItemDetailsLeftText>Asset</AlertItemDetailsLeftText>
                        <AlertItemDetailsRightText>Giftcard</AlertItemDetailsRightText>
                    </AlertItemRow>
                    <AlertItemRow>
                        <AlertItemDetailsLeftText>Category</AlertItemDetailsLeftText>
                        <AlertItemDetailsRightText>Amazon</AlertItemDetailsRightText>
                    </AlertItemRow>
                    <AlertItemRow>
                        <AlertItemDetailsLeftText>Sub Category</AlertItemDetailsLeftText>
                        <AlertItemDetailsRightText>USA Steam Physical (ALL)</AlertItemDetailsRightText>
                    </AlertItemRow>
                    <AlertItemRow>
                        <AlertItemDetailsLeftText>Current Rate</AlertItemDetailsLeftText>
                        <AlertItemDetailsRightText>675</AlertItemDetailsRightText>
                    </AlertItemRow>
                    <AlertItemRow>
                        <AlertItemDetailsLeftText>Notify me when the rate is above</AlertItemDetailsLeftText>
                        <AlertItemDetailsRightText>750</AlertItemDetailsRightText>
                    </AlertItemRow>
               </AlertItemDetails>
               <ItemButtonsContainer>
                    <ItemDeleteBtn>
                        <DeleteBtnText>Delete</DeleteBtnText>
                    </ItemDeleteBtn>
                    {/* <ItemEditBtn onPress = {() => navigation.navigate("RateAlertForm")}>
                        <ItemBtnText>Edit</ItemBtnText>
                    </ItemEditBtn> */}
               </ItemButtonsContainer>
            </MainContainer>
        </StyledContainer>
        </SafeAreaView>
    );
};


export default RateAlertDetails;

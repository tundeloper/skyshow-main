import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text } from "react-native";
import { Octicons } from '@expo/vector-icons';

import {
    StyledContainer,
    Colors,
    MainContainer,
    ScreenTitles,
    ContentMarginTop,
    BankCardContainer,
    CardIcon,
    AccountNoContent,
    AccountNumber,
    AcctNumberText,
    AccountNameContent,
    AcctName,
    BankName,
    CardDetailsContainer,
    DetailsTextContainer,
    CardDetailsLeftText,
    CardDetailsRightText,
    DeleteBankInfoBtn,
    DeleteBankText,
    BankIcon,
} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";

const { backgroundColor, inputPlaceholder } = Colors;

const BankCard = ({ navigation }) => {
    const [isCardDetailsOpen, setCardDetailsOpen] = useState(false);

    // Function to toggle the CardDetailsContainer
    const toggleCardDetails = () => {
        setCardDetailsOpen(!isCardDetailsOpen);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StyledContainer>
                <StatusBar style="light" backgroundColor={backgroundColor} />
                <MainContainer>
                    <ScreenTitles>My Bank Account</ScreenTitles>
                    <ContentMarginTop />

                    {/* =====bank card container (clickable)========= */}
        
                        <BankCardContainer onPress={toggleCardDetails}>
                            <CardIcon>
                                <BankIcon source={require("../assets/icons/white-bank.png")} />
                            </CardIcon>
                            <AccountNoContent>
                                <AccountNumber>0787423456</AccountNumber>
                                <AcctNumberText>Account Number</AcctNumberText>
                            </AccountNoContent>
                            <AccountNameContent>
                                <AcctName>RACHAEL ANDERSON</AcctName>
                                <BankName>ACCESS BANK</BankName>
                            </AccountNameContent>
                        </BankCardContainer>
         

                    {/* =====bank details (conditionally rendered)========= */}
                    {isCardDetailsOpen && (
                        <CardDetailsContainer>
                            <DetailsTextContainer>
                                <CardDetailsLeftText>Bank name</CardDetailsLeftText>
                                <CardDetailsRightText>ACCESS BANK</CardDetailsRightText>
                            </DetailsTextContainer>
                            <DetailsTextContainer>
                                <CardDetailsLeftText>Account name</CardDetailsLeftText>
                                <CardDetailsRightText>RACHAEL ANDERSON</CardDetailsRightText>
                            </DetailsTextContainer>
                            <DetailsTextContainer>
                                <CardDetailsLeftText>Account number</CardDetailsLeftText>
                                <CardDetailsRightText>0724567819</CardDetailsRightText>
                            </DetailsTextContainer>
                            <DeleteBankInfoBtn>
                                <DeleteBankText>Delete account</DeleteBankText>
                            </DeleteBankInfoBtn>
                        </CardDetailsContainer>
                    )}
                </MainContainer>
            </StyledContainer>
        </SafeAreaView>
    );
};

export default BankCard;

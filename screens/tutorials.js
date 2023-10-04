import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text , Image} from "react-native";

// ======icon==============
import { Octicons } from '@expo/vector-icons';

//////components--------
import {
    StyledContainer,
    Colors,
    MainContainer,
    ScreenTitles,
    ContentMarginTop,
    TutorialsContainer,
    TutorialThumbail,
    TutorialsTitle,
    TutorialTitleContainer

} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";

const { backgroundColor, inputPlaceholder} = Colors;
const Tutorials = ({navigation}) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StyledContainer>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
            <MainContainer>
                <ScreenTitles>Tutorials</ScreenTitles>
                <ContentMarginTop/>
                <TutorialsContainer>
                    <TutorialThumbail source={require("../assets/images/camera-lady.jpeg")} />
                    <TutorialTitleContainer>
                        <TutorialsTitle>Helllloooo</TutorialsTitle>
                    </TutorialTitleContainer>
                </TutorialsContainer>
            </MainContainer>
        </StyledContainer>
        </SafeAreaView> 
    );
};


export default Tutorials;

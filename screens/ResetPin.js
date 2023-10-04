import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ResetPinInputFields from "../components/ResetPinInputFields";


import {
    StyledContainer,
    MainContainer,
    ScreenTitles,
    ContentMarginTop,
    InnerContainer,
    StyledFormArea,
    ButtonText,
    StyledButton,
    Colors,
    MsgBox,
    InputContainer,
    StyledTextInputLabel,
    PageTitle,
   

} from '../styles/styles';

const { backgroundColor, inputPlaceholder} = Colors;

function ResetPin() {






  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledContainer>
      <StatusBar style="light" backgroundColor={backgroundColor} /> 
        <MainContainer>
        <ScreenTitles>Reset PIN</ScreenTitles>
        <ContentMarginTop/>
        <ResetPinInputFields/>
        </MainContainer>
      </StyledContainer>
    </SafeAreaView>
  )
}

export default ResetPin

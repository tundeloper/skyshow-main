import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text } from "react-native";
import LoadingBarScreen from "../components/LoadingBar.js";

// ======icon==============
import { Octicons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

//////components--------
import {
  StyledContainer,
  Colors,
  MainContainer,
  ScreenTitles,
  SettingsContainer,
  SettingsIconLeft,
  SettingsIconRight,
  SettingsContent,
  SettingsTitle,
  SettingsSubTitle,
  SettingsContainerInner,
  ContentMarginTop,
} from "../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";

const { backgroundColor, inputPlaceholder } = Colors;

const isLoading = false;

const Support = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColor }}>
      <StyledContainer>
        <StatusBar style="light" backgroundColor={backgroundColor} />
        <MainContainer>
          <ScreenTitles>Help & Support </ScreenTitles>
          <ContentMarginTop />
          {/* ===========Contact us======== */}
          <SettingsContainer
            onPress={() => navigation.navigate("ContactUs")}
          >
            <SettingsContainerInner>
              <SettingsIconLeft>
              <Ionicons name="person-circle-outline" size={16} color={inputPlaceholder} />
              </SettingsIconLeft>
              <SettingsContent>
                <SettingsTitle>Contact us</SettingsTitle>
              </SettingsContent>
            </SettingsContainerInner>
            <SettingsIconRight>
              <Ionicons name="caret-forward" size={16} color={inputPlaceholder} />
            </SettingsIconRight>
          </SettingsContainer>
          {/* ===========Live chat======== */}
          <SettingsContainer onPress={() => navigation.navigate('Chat')}> 
            <SettingsContainerInner >
              <SettingsIconLeft>
              <Ionicons name="chatbubble-outline" size={16} color={inputPlaceholder} />
              </SettingsIconLeft>
              <SettingsContent >
                <SettingsTitle>Live Chat</SettingsTitle>
                {/* <SettingsSubTitle>View & edit profile</SettingsSubTitle> */}
              </SettingsContent>
            </SettingsContainerInner>
            <SettingsIconRight>
            <Ionicons name="caret-forward" size={16} color={inputPlaceholder} />
            </SettingsIconRight>
          </SettingsContainer>
          {/* =================== */}
          <SettingsContainer
            // onPress={() => navigation.navigate("SecuritySettings")}
          >
            <SettingsContainerInner>
              <SettingsIconLeft>
              <Ionicons name="help-circle-outline" size={16} color={inputPlaceholder} />
              </SettingsIconLeft>
              <SettingsContent>
                <SettingsTitle>FAQ</SettingsTitle>
                {/* <SettingsSubTitle>View & edit profile</SettingsSubTitle> */}
              </SettingsContent>
            </SettingsContainerInner>
            <SettingsIconRight>
              <Ionicons name="caret-forward" size={16} color={inputPlaceholder} />
            </SettingsIconRight>
          </SettingsContainer>
          {/* ===========Rate alert settings======== */}
          <SettingsContainer 
          // onPress={() => navigation.navigate("RateAlert")}
          >
            <SettingsContainerInner>
              <SettingsIconLeft>
              <Ionicons name="document-text-outline" size={16} color={inputPlaceholder} />
              </SettingsIconLeft>
              <SettingsContent>
                <SettingsTitle>Terms and condition</SettingsTitle>
                {/* <SettingsSubTitle>View & edit profile</SettingsSubTitle> */}
              </SettingsContent>
            </SettingsContainerInner>
            <SettingsIconRight>
              <Ionicons name="caret-forward" size={16} color={inputPlaceholder} />
            </SettingsIconRight>
          </SettingsContainer>
        </MainContainer>
      </StyledContainer>

      {/* Use a state value to figure out when loading starts and ends, 
      show/hide the loading screen on a per screen basis */}
      {isLoading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <LoadingBarScreen />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Support;

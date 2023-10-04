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

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColor }}>
      <StyledContainer>
        <StatusBar style="light" backgroundColor={backgroundColor} />
        <MainContainer>
          <ScreenTitles>Settings</ScreenTitles>
          <ContentMarginTop />
          {/* ===========Profile settings======== */}
          <SettingsContainer
            onPress={() => navigation.navigate("ProfileSettings")}
          >
            <SettingsContainerInner>
              <SettingsIconLeft>
                  <Ionicons name="person-outline" size={16} color={inputPlaceholder} />
              </SettingsIconLeft>
              <SettingsContent>
                <SettingsTitle>Profile Settings</SettingsTitle>
                <SettingsSubTitle>View & edit profile</SettingsSubTitle>
              </SettingsContent>
            </SettingsContainerInner>
            <SettingsIconRight>
              <Ionicons name="caret-forward" size={16} color={inputPlaceholder} />
            </SettingsIconRight>
          </SettingsContainer>
          {/* ===========General settings======== */}
          <SettingsContainer
            onPress={() => navigation.navigate("GeneralSettings")}
          >
            <SettingsContainerInner>
              <SettingsIconLeft>
              <Ionicons name="settings-outline" size={16} color={inputPlaceholder} />
              </SettingsIconLeft>
              <SettingsContent>
                <SettingsTitle>General Settings</SettingsTitle>
                <SettingsSubTitle>View & edit profile</SettingsSubTitle>
              </SettingsContent>
            </SettingsContainerInner>
            <SettingsIconRight>
            <Ionicons name="caret-forward" size={16} color={inputPlaceholder} />
            </SettingsIconRight>
          </SettingsContainer>
          {/* ===========Security settings======== */}
          <SettingsContainer
            onPress={() => navigation.navigate("SecuritySettings")}
          >
            <SettingsContainerInner>
              <SettingsIconLeft>
                <Ionicons
                  name="lock-closed-outline"
                  color={inputPlaceholder}
                  size={16}
                />
              </SettingsIconLeft>
              <SettingsContent>
                <SettingsTitle>Security Settings</SettingsTitle>
                <SettingsSubTitle>View & edit profile</SettingsSubTitle>
              </SettingsContent>
            </SettingsContainerInner>
            <SettingsIconRight>
            <Ionicons name="caret-forward" size={16} color={inputPlaceholder} />
            </SettingsIconRight>
          </SettingsContainer>
          {/* ===========Rate alert settings======== */}
          <SettingsContainer onPress={() => navigation.navigate("RateAlert")}>
            <SettingsContainerInner>
              <SettingsIconLeft>
                <Ionicons name="alert" color={inputPlaceholder} size={16} />
              </SettingsIconLeft>
              <SettingsContent>
                <SettingsTitle>Rate Alert Settings</SettingsTitle>
                <SettingsSubTitle>View & edit profile</SettingsSubTitle>
              </SettingsContent>
            </SettingsContainerInner>
            <SettingsIconRight>
            <Ionicons name="caret-forward" size={16} color={inputPlaceholder} />
            </SettingsIconRight>
          </SettingsContainer>
          {/* ===========Tutorials======== */}
          <SettingsContainer onPress={() => navigation.navigate("Tutorials")}>
            <SettingsContainerInner>
              <SettingsIconLeft>
                <Ionicons
                  name="book-outline"
                  color={inputPlaceholder}
                  size={16}
                />
              </SettingsIconLeft>
              <SettingsContent>
                <SettingsTitle>Tutorials</SettingsTitle>
                <SettingsSubTitle>View & edit profile</SettingsSubTitle>
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

export default Settings;

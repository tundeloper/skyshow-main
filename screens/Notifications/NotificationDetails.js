import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

// Assuming your styles are correctly defined in the 'styles/styles.js' file
import {
  StyledContainer,
  Colors,
  MainContainer,
  ScreenTitles,
  ContentMarginTop,
  NotificationDateandTimeContainer,
  NotificationDate,
  NotificationTime,
  NotificationDetailsContainer,
  NotificationDetailsTop,
  NotificationDetailsTitle,
  NotificationDetailsBottom,
  NotificationDetailsDescription,
} from "../../styles/styles";

const NotificationDetails = ({ route }) => {
  // Extract the data passed from the Notification screen
  const { title, date, time, description } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledContainer>
        <StatusBar style="light" backgroundColor={Colors.backgroundColor} />
        <MainContainer>
          <ScreenTitles>Details</ScreenTitles>
          <ContentMarginTop />
          <ScrollView>
          <NotificationDetailsContainer>
            <NotificationDetailsTop>
              {/* Display the extracted data */}
              <NotificationDetailsTitle>{title}</NotificationDetailsTitle>
              <NotificationDateandTimeContainer>
                <NotificationDate>{date}</NotificationDate>
                <NotificationTime>{time}</NotificationTime>
              </NotificationDateandTimeContainer>
            </NotificationDetailsTop>
            <NotificationDetailsBottom>
              <NotificationDetailsDescription>{description}</NotificationDetailsDescription>
            </NotificationDetailsBottom>
          </NotificationDetailsContainer>
          </ScrollView>
         
        </MainContainer>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default NotificationDetails;

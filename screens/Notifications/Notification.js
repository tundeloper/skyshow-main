import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

// ======icon==============
import { Octicons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

// Import your styles and DummyDataSets if necessary
import {
    StyledContainer,
    Colors,
    MainContainer,
    ScreenTitles,
    ContentMarginTop,
    NotificationDateandTimeContainer,
    NotificationDate,
    NotificationTime,
    NotificationContentContainer,
    NotificationTitle,
    NotificationDescription,
    NotificationContainer,
    NotificationContent,
} from '../../styles/styles';

import { SafeAreaView } from "react-native-safe-area-context";
import DummyDataSets from "../../constants/DummyDataSets"; // Ensure this path is correct

const { backgroundColor, inputPlaceholder, success } = Colors;

const Notification = () => {
  const navigation = useNavigation();
    const selectedDataSet = "notificationData";
    const data = DummyDataSets[selectedDataSet];

    const renderItem = ({ item }) => {
        const truncateText = (text, maxLength) => {
            if (text.length > maxLength) {
                return text.substring(0, maxLength) + "...";
            }
            return text;
        };

        const truncatedTitle = truncateText(item.title, 30); // Adjust the max length as needed
        const truncatedDescription = truncateText(item.description, 100); // Adjust the max length as needed

        return (
            <NotificationContainer>
                <NotificationContent onPress={() =>
                
                    navigation.navigate('NotificationDetails',  {
                        title: item.title,
                        date: item.date,
                        time: item.time,
                        description: item.description,
                        
                    })
                    
                }
                >
                    <NotificationContentContainer>
                        <NotificationTitle>{truncatedTitle}</NotificationTitle>
                        <NotificationDescription>{truncatedDescription}</NotificationDescription>
                    </NotificationContentContainer>
                    <NotificationDateandTimeContainer>
                        <NotificationDate>{item.date}</NotificationDate>
                        <NotificationTime>{item.time}</NotificationTime>
                    </NotificationDateandTimeContainer>
                </NotificationContent>
            </NotificationContainer>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StyledContainer>
                <StatusBar style="light" backgroundColor={backgroundColor} />
                <MainContainer>
                    <ScreenTitles>Notifications</ScreenTitles>
                    <ContentMarginTop />

                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />

                </MainContainer>
            </StyledContainer>
        </SafeAreaView>
    );
};

export default Notification;




import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CrptoRate from "./CrptoRate";
import GiftcardRate from "./GiftcardRate";


//----------components--------
import {
    StyledContainer,
    RateCalculatorTab,
    TabsContainer,
    Colors,
    MainContainer,
    ScreenTitles,
    ContentMarginTop,
    TabContentsContainer
} from '../../styles/styles';
const { backgroundColor, inputPlaceholder, white} = Colors;

const RateCalculator = () => {
  const [activeTab, setActiveTab] = useState("Giftcard");

  const tabs = [
    { label: "Giftcard", content: <GiftcardRate /> },
    { label: "Crypto", content: <CrptoRate /> },
  ];

  const renderTab = ({ item }) => {
    const isActive = activeTab === item.label;
  
    return (
      <RateCalculatorTab
        active={isActive}
        onPress={() => setActiveTab(item.label)}
      >
        <Text style={{ color: isActive ? backgroundColor : white }}>{item.label}</Text>
      </RateCalculatorTab>
    );
  };

  const renderContent = () => {
    const activeTabContent = tabs.find((tab) => tab.label === activeTab);
  
    if (activeTabContent) {
      return activeTabContent.content;
    }
  
    return null;
  };
  return (
    // <StyledContainer style={{ flex: 1 }}>
         
     
    // </StyledContainer>
    <SafeAreaView  style={{ flex: 1 }} edges={["bottom", "left", "right"]}>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
    <TabContentsContainer>
    
    <ContentMarginTop/>
            <ScreenTitles>Rate Calculator</ScreenTitles>
            <ContentMarginTop/>
        <TabsContainer>
       <View >
        <FlatList
              data={tabs}
              renderItem={renderTab}
              keyExtractor={(item) => item.label}
              horizontal
              showsHorizontalScrollIndicator={false}
          />
       </View>
      </TabsContainer>
    
      
     
      <View style={{ flex: 1}}>
      {renderContent()}
      </View>
    </TabContentsContainer>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    tab: {
      flex: 1, // Distribute tabs evenly within the container
      padding: 10,
      gap: 10,
      borderRadius: 10, // Optional: Add rounded corners to the tabs
      marginRight: 10, // Optional: Add spacing between tabs
      alignItems: 'center',
      justifyContent: 'space-between',

    },
    // activeTab: {
    //     backgroundColor: '#007AFF',
    //   },
    //   tabText: {
    //     color: '#333',
    //   },
    //   activeTabText: {
    //     color: '#FFF',
    //   },
  });





export default RateCalculator;
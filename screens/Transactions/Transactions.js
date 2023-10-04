import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GiftCardTransaction from "./GiftcardTransactions";
import CryptoTransaction from "./CryptoTransactions";
import BillsTransaction from "./BillsTransactions";


//----------components--------
import {
    StyledContainer,
    TransactionTab,
    TabsContainer,
    Colors,
    MainContainer,
    ScreenTitles,
    ContentMarginTop,
    TradeButton
} from '../../styles/styles';
const { backgroundColor, inputPlaceholder, white} = Colors;

const Transactions = () => {
  const [activeTab, setActiveTab] = useState("Giftcard");

  const tabs = [
    { label: "Giftcard", content: <GiftCardTransaction /> },
    { label: "Crypto", content: <CryptoTransaction /> },
    { label: "Bills", content: <BillsTransaction /> },
  ];

  const renderTab = ({ item }) => {
    const isActive = activeTab === item.label;
  
    return (
      <TransactionTab
        active={isActive}
        onPress={() => setActiveTab(item.label)}
      >
        <Text style={{ color: isActive ? backgroundColor : white }}>{item.label}</Text>
      </TransactionTab>
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
    <StyledContainer style={{ flex: 1 }}>
      <ContentMarginTop/>
      <MainContainer>
      <TabsContainer>
       <View>
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
      <ContentMarginTop/>
        {renderContent()}
      </View>
      </MainContainer>
    </StyledContainer>
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
      justifyContent: 'center',
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





export default Transactions;
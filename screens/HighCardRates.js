import React from "react";
import { StatusBar } from "expo-status-bar";
import { View,Text,  FlatList, StyleSheet} from "react-native";

//dummy dta=========
import DummyDataSets from "../constants/DummyDataSets";

//////components--------
import {
    StyledContainer,
    Colors,
    MainContainer,
    ScreenTitles,
    ContentMarginTop
} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";

const { backgroundColor, inputPlaceholder} = Colors;



const HighCardRates = () => {
  const selectedDataSet = 'highCardRates';
  const data = DummyDataSets[selectedDataSet];

    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.rateContainer}>
                <Text style={styles.type}>{item.type}</Text>
                <Text style={styles.rate}>NGN {item.rate}{selectedDataSet === 'highCardRates'}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StyledContainer>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
            <MainContainer>
            <ScreenTitles>High Card Rates</ScreenTitles>
            {/* --------------------data list--------------------- */}
            <ContentMarginTop/>
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

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#17203D',
      width: '100%',
      padding: 20,
      marginVertical: 8,
      borderRadius: 15,
    },
    rateContainer: {
        paddingTop: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    },
    type: {
      fontSize: 14,
      color: '#fff',
    },
    rate: {
      fontSize: 14,
      color: '#fff',
    },
  });

export default HighCardRates;

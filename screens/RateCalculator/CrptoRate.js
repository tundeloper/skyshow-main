import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text, FlatList, Image } from "react-native"; // Import Image component
import Modal from "react-native-modal";

// ======icon==============
import { Octicons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

import {
    StyledContainer,
    StyledButton,
    ButtonText,
    Colors,
    MainContainer,
    ScreenTitles,
    StyledFormArea,
    StyledTextInput,
    StyledTextInputLabel,
    RateEntryText,
    ContentMarginTop,
    FooterText,
    ShortModalContainer,
    ShortModal,
    ShortModalTitle,
    ShortModalItemName,
    CloseButton,
    ShortModalHeading,
    ShortModalItemContainer,
    SuccessAlert,
    AlertText,
    AlertIcon,
    SmallLeftInput,
    RightSmallInput,
    NairaText,
    DoubleInput,
} from '../../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import { ScrollView } from "react-native-gesture-handler";

const { backgroundColor, inputPlaceholder, white, success} = Colors;

   // card Category ========
const cardCategory = [
    { id: 1, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "Bitcoin" },
    { id: 2, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "Usdt" },
    { id: 3, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name:"Ethereum" },
];
   // card sub Category ========
   const cardSubCategory = [
    {
        id: 1,
        name: "AMAZON CARD",
        prices: [
            { price: "$50-100" },
            { price: "$200-450" },
            { price: "$500-750" },
            { price: "$800-950" },
            { price: "$1000-1550" },
        ],
    },
    {
        id: 2,
        name: "ITUNES CARD",
        prices: [
            { price: "$50-100" },
            { price: "$200-450" },
            { price: "$500-750" },
            { price: "$800-950" },
            { price: "$1000-1550" },
            // Add more prices as needed
        ],
    },
    // Add more card categories as needed
];


const CrptoRate = ({ navigation }) => {
    const [isCardCategoryModalVisible, setCardCategoryModalVisible] = useState(false);
    const [selectedBank, setSelectedBank] = useState("");
    const [userData, setUserData] = useState({ email: "", selectedCategory: "", selectedSubCategory: "", priceTarget: 0 });

  
    const toggleCardCategoryModal = () => {
      setCardCategoryModalVisible(!isCardCategoryModalVisible);
    };
  
  
  

    const handleCategorySelection = (category) => {
        setSelectedBank(category);
        toggleCardCategoryModal();
        setUserData({ ...userData, selectedCategory: category });
      };
    
  
  

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StyledContainer>
                <StatusBar style="light" backgroundColor={backgroundColor} />
                <MainContainer>
                    <ScrollView>
                       <RateEntryText>Check the real value of your crypto</RateEntryText>
                        <ContentMarginTop />
                        <Formik initialValues={userData}
                            onSubmit={(values) => {
                                console.log(values)
                                navigation.navigate('AlertList');
                            }}
                        >

                            {({ handleChange, handleBlur, handleSubmit, values }) => (
                            
                                <StyledFormArea>
                                    <StyledTextInputLabel>Currency</StyledTextInputLabel>
                                    <TouchableOpacity onPress={toggleCardCategoryModal}>
                                        <StyledTextInput
                                        placeholder="Select"
                                        placeholderTextColor={inputPlaceholder}
                                        value={selectedBank}
                                        editable={false}
                                        />
                                    </TouchableOpacity>
                                   
                                    <StyledTextInputLabel>Amount (minimum amount)</StyledTextInputLabel>
                                    <View>
                                        <StyledTextInput
                                          placeholder="Amount"
                                          placeholderTextColor={inputPlaceholder}
                                        />
                                    </View>
                                    <StyledTextInputLabel>Amount in USD</StyledTextInputLabel>
                                    <View>
                                        <StyledTextInput
                                          placeholder="Amount"
                                          placeholderTextColor={inputPlaceholder}
                                        />
                                    </View>
                                    <DoubleInput>
                                        <SmallLeftInput>
                                          <Image source={require("../../assets/images/flag.png")} style={{ width: 20, height: 20 }}/>
                                          <NairaText>NGN</NairaText>
                                        </SmallLeftInput>
                                        <RightSmallInput
                                        placeholder="Rate"
                                        keyboardype= "number-pad"
                                        placeholderTextColor = {inputPlaceholder}
                                        />
                                    </DoubleInput>
                                    {/* <FooterText>The current Rate for this Gift card is 0</FooterText>
                                    <FooterText>Notify me when this gift Card rate is above?</FooterText> */}
                                 
                                    <StyledButton onPress={handleSubmit}>
                                      <ButtonText>Sell Crypto</ButtonText>
                                    </StyledButton>
                                </StyledFormArea>
                            )}
                        </Formik>
                    </ScrollView>
                </MainContainer>
            </StyledContainer>
           


            {/* =Alert pop up========= */}

           


            {/* =========CARD CATEGORY=============== */}

            <Modal
        isVisible={isCardCategoryModalVisible}
        style={{ margin: 0 }}
        onBackdropPress={toggleCardCategoryModal}
        backdropOpacity={0.5}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <ShortModalContainer>
          <ShortModal>
            <ShortModalHeading>
              <ShortModalTitle>Select a Category</ShortModalTitle>
              <CloseButton onPress={toggleCardCategoryModal}>
                <Octicons name="x" size={24} color="white" />
              </CloseButton>
            </ShortModalHeading>
            <FlatList
              data={cardCategory}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleCategorySelection(item.name)}>
                  <ShortModalItemContainer>
                    {item.image && (
                        <Image
                        source={{ uri: item.image }}
                        style={{ width: 25, height: 25, marginRight: 10, borderRadius: 50 }}
                      />
                    )}
                    <ShortModalItemName>{item.name}</ShortModalItemName>
                  </ShortModalItemContainer>
                </TouchableOpacity>
              )}
            />
          </ShortModal>
        </ShortModalContainer>
      </Modal>
        </SafeAreaView>
    );
};

export default CrptoRate;

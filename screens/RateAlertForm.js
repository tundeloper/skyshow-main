import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text, FlatList, Image, ScrollView } from "react-native"; // Import Image component
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
    DoubleInput,
    SmallLeftInput,
    RightSmallInput,
    NairaText
} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
// import { ScrollView } from "react-native-gesture-handler";

const { backgroundColor, inputPlaceholder, white, success} = Colors;

   // card Category ========
const cardCategory = [
    { id: 1, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "AMAZON CARD" },
    { id: 2, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "ITUNES CARD" },
    { id: 3, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "EBAY CARD" },
    { id: 4, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "GOOGLE PLAY CARD" },
    { id: 5, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "SPOTIFY CARD" },
    { id: 6, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "AMAZON CARD" },
    { id: 7, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "AMAZON CARD" },
    { id: 8, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "AMAZON CARD" },
    { id: 9, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "AMAZON CARD" },
    { id: 10, image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", name: "AMAZON CARD" },
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


const RateAlertForm = ({ navigation }) => {
    const [isCardCategoryModalVisible, setCardCategoryModalVisible] = useState(false);
    const [isCardSubCategoryModalVisible, setCardSubCategoryModalVisible] = useState(false);
    const [isNotifyViaModalVisible, setNotifyViaModalVisible] = useState(false);
    const [selectedBank, setSelectedBank] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [selectedNotifyMethod, setSelectedNotifyMethod] = useState("");
    const [userData, setUserData] = useState({ email: "", selectedCategory: "", selectedSubCategory: "", priceTarget: 0 });

  
    const toggleCardCategoryModal = () => {
      setCardCategoryModalVisible(!isCardCategoryModalVisible);
    };
  
    const toggleCardSubCategoryModal = () => {
      setCardSubCategoryModalVisible(!isCardSubCategoryModalVisible);
    };
  
    const toggleNotifyViaModal = () => {
      setNotifyViaModalVisible(!isNotifyViaModalVisible);
    };


    const handleCategorySelection = (category) => {
        setSelectedBank(category);
        toggleCardCategoryModal();
        setUserData({ ...userData, selectedCategory: category });
      };
    
      const handleSubCategorySelection = (subCategory) => {
        setSelectedSubCategory(subCategory.name);
        toggleCardSubCategoryModal();
        setUserData({ ...userData, selectedSubCategory: subCategory.name });
      };
    
      const handleNotifyMethodSelection = (method) => {
        setSelectedNotifyMethod(method);
        toggleNotifyViaModal();
      };

  

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StyledContainer>
                <StatusBar style="light" backgroundColor={backgroundColor} />
                <MainContainer>
                    <ScrollView>

                        <ScreenTitles>Set Rate Alert</ScreenTitles>
                        <RateEntryText>Get notified when a gift card rate goes above your price target</RateEntryText>
                        <ContentMarginTop />
                        <Formik initialValues={userData}
                            onSubmit={(values) => {
                                console.log(values)
                                navigation.navigate('AlertList');
                            }}
                        >

                            {({ handleChange, handleBlur, handleSubmit, values }) => (
                            
                                <StyledFormArea>
                                    <StyledTextInputLabel>Notify me via</StyledTextInputLabel>
                                    <TouchableOpacity onPress={toggleNotifyViaModal}>
                                        <StyledTextInput
                                            placeholder="Select"
                                            placeholderTextColor={inputPlaceholder}
                                            value={selectedNotifyMethod}
                                            editable={false}
                                        />
                                    </TouchableOpacity>
                                    <StyledTextInputLabel>What asset to set notification for?</StyledTextInputLabel>
                                    <StyledTextInput
                                        placeholder="Gift Card"
                                        placeholderTextColor={white}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        editable={false}
                                    />
                                    <StyledTextInputLabel>Category</StyledTextInputLabel>
                                    <TouchableOpacity onPress={toggleCardCategoryModal}>
                                        <StyledTextInput
                                        placeholder="Select"
                                        placeholderTextColor={inputPlaceholder}
                                        value={selectedBank}
                                        editable={false}
                                        />
                                    </TouchableOpacity>
                                    <StyledTextInputLabel>Sub Category</StyledTextInputLabel>
                                    <TouchableOpacity onPress={toggleCardSubCategoryModal}>
                                        <StyledTextInput
                                        placeholder="Select"
                                        placeholderTextColor={inputPlaceholder}
                                        value={selectedSubCategory}
                                        editable={false}
                                        />
                                    </TouchableOpacity>
                                    <FooterText>The current Rate for this Gift card is 0</FooterText>
                                    <FooterText>Notify me when this gift Card rate is above?</FooterText>
                                    <DoubleInput>
                                        <SmallLeftInput>
                                          <Image source={require("../assets/images/flag.png")} style={{ width: 20, height: 20 }}/>
                                          <NairaText>NGN</NairaText>
                                        </SmallLeftInput>
                                        <RightSmallInput
                                        placeholder="Rate"
                                        keyboardype= "number-pad"
                                        placeholderTextColor = {inputPlaceholder}
                                        />
                                    </DoubleInput>
                                    <StyledButton onPress={handleSubmit}>
                                      <ButtonText>Create Alert</ButtonText>
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

            {/* =================GIFT CARD SUB CATEGORY============ */}
          <Modal
        isVisible={isCardSubCategoryModalVisible}
        style={{ margin: 0 }}
        onBackdropPress={toggleCardSubCategoryModal}
        backdropOpacity={0.5}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <ShortModalContainer>
          <ShortModal>
            <ShortModalHeading>
              <ShortModalTitle>Select a Sub-Category</ShortModalTitle>
              <CloseButton onPress={toggleCardSubCategoryModal}>
                <Octicons name="x" size={24} color="white" />
              </CloseButton>
            </ShortModalHeading>
            <FlatList
              data={cardSubCategory}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSubCategorySelection(item)}>
                  <ShortModalItemContainer>
                    <ShortModalItemName>{item.name}</ShortModalItemName>
                  </ShortModalItemContainer>
                  </TouchableOpacity>
              )}
                />
            </ShortModal>
            </ShortModalContainer>
        </Modal>
                    
            {/* =================ALERT NOTIFICATION SETTING============ */}
            <Modal
                isVisible={isNotifyViaModalVisible}
                style={{ margin: 0 }}
                onBackdropPress={toggleNotifyViaModal}
                backdropOpacity={0.5}
                animationIn="slideInUp"
                animationOut="slideOutDown"
            >
                <ShortModalContainer>
          <ShortModal>
            <ShortModalHeading>
              <ShortModalTitle>Select a Notification Method</ShortModalTitle>
              <CloseButton onPress={toggleNotifyViaModal}>
                <Octicons name="x" size={24} color="white" />
              </CloseButton>
            </ShortModalHeading>
            <FlatList
              data={["Email", "SMS", "Push Notification"]} // Add your notification methods here
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleNotifyMethodSelection(item)}>
                  <ShortModalItemContainer>
                    <ShortModalItemName>{item}</ShortModalItemName>
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

export default RateAlertForm;


import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text, ScrollView, Image, FlatList} from "react-native";
import Modal from "react-native-modal";
import * as ImagePicker from 'expo-image-picker';


// ======icon==============
import { Octicons } from '@expo/vector-icons';

//////components--------
import {
    StyledContainer,StyledButton, ButtonText,Colors,MainContainer,ScreenTitles,StyledFormArea,
    StyledTextInput,StyledTextInputLabel,CardRateContainer,CardRateTopText,CardTotalText,
    BottomTextContainer,CardPriceText,SmallInputAndButtonContainer,InputFieldShort, ButtonRight,
    ButtonRighText, GiftcardImageUpload, GiftCardImage, CardRateInner, AddedImages, AllUploadedImages,
    SelectedImages, DeleteImageBtn, SuccessAlertModal,AlertModalIcon, CheckIcon,AlertModalText,
    AlertModalTextSpan,
} from '../../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";

const { backgroundColor, inputPlaceholder, danger, white} = Colors;


// =======Input filed modal components ============
import CardCategory from "./CardCategory";
import SubCategory from "./SubCategory";
import CardCountry from "./CardCountry";
import CardForm from "./CardForm";



const SellGiftcard = ({navigation}) => { 
    const [userData, setUserData] = useState({ category: '', cardForm: '', cardCode: '', subCategory: '', cardAmount: ''});
    const [images, setImages] = useState([]); // State for managing selected images
    // ===category ===========
    const [isCardCategoryModalVisible, setCardCategoryModalVisible] = useState(false);
    const [selectedCategory, setselectedCategory] = useState("");
    // ===sub category=============
    const [isCardSubCategoryModalVisible, setCardSubCategoryModalVisible] = useState(false);
    const [selectedSubCategory, setselectedSubCategory] = useState("");
    // ===Crad country=============
    const [isCardCountryModalVisible, setCardCountryModalVisible] = useState(false);
    const [selectedCardCountry, setselectedCardCountry] = useState("");
    // ===Card Form=============
    const [isCardFormModalVisible, setCardFormModalVisible] = useState(false);
    const [selectedCardForm, setselectedCardForm] = useState("");
        // State for the success modal
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  
   
// Function to show/hide the success modal
const toggleSuccessModal = () => {
    setSuccessModalVisible(!isSuccessModalVisible);
  };

// =========modal function for category================
    const toggleCardCategoryModal = () => {
        setCardCategoryModalVisible(!isCardCategoryModalVisible);
      };
  
      const handleCategorySelection = (category) => {
        setselectedCategory(category);
        toggleCardCategoryModal();
        setUserData({ ...userData, selectedCategory: category });
      };


// =========modal function for Subcategory================
    const toggleCardSubCategoryModal = () => {
        setCardSubCategoryModalVisible(!isCardSubCategoryModalVisible);
      };
  
      const handleSubCategorySelection = (subCategory) => {
        setselectedSubCategory(subCategory);
        toggleCardSubCategoryModal();
        setUserData({ ...userData, selectedSubCategory: subCategory });
      };

// =========modal function for Card Country================
    const toggleCardCountryModal = () => {
        setCardCountryModalVisible(!isCardCountryModalVisible);
      };
  
      const handleCardCountrySelection = (cardCountry) => {
        setselectedCardCountry(cardCountry);
        toggleCardCountryModal();
        setUserData({ ...userData, selectedCardCountry: cardCountry });
      };
// =========modal function for Card form input================
    const toggleCardFormModal = () => {
        setCardFormModalVisible(!isCardFormModalVisible);
      };
  
      const handleCardFormSelection = (cardForm) => {
        setselectedCardForm(cardForm);
        toggleCardFormModal();
        setUserData({ ...userData, selectedCardForm: cardForm });
      };


      // ===========for image upload=============
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
    
        if (!result.canceled) {
          // Add the selected image to the list of images
          setImages([...images, result.uri]);
        }
      };
    
      const deleteImage = (index) => {
        // Remove the image at the specified index from the list
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
      };


    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StyledContainer>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
            <MainContainer>
                <ScreenTitles>Sell Gift Card</ScreenTitles> 
                <ScrollView>

               
               
             {/* ===============FORM SECTION================ */}
             <Formik initialValues={userData}
                    onSubmit={(values) => {
                        console.log(values) ; 
                    }}   
                    >

                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                            <StyledTextInputLabel>Gift card category</StyledTextInputLabel>
                            <TouchableOpacity onPress={toggleCardCategoryModal}>
                                <StyledTextInput
                                    placeholder="Select"
                                    placeholderTextColor={inputPlaceholder}
                                    value={selectedCategory}
                                    editable={false}
                                    required
                                />
                            </TouchableOpacity>
                            <CardCategory
                                isModalVisible={isCardCategoryModalVisible}
                                toggleModal={toggleCardCategoryModal}
                                handleCategorySelection={handleCategorySelection}
                            />
                             <StyledTextInputLabel>Gift card form (Optional)</StyledTextInputLabel>
                            <TouchableOpacity onPress={toggleCardFormModal}>
                                <StyledTextInput
                                    placeholder="Select"
                                    placeholderTextColor={inputPlaceholder}
                                    value={selectedCardForm}
                                    editable={false}
                                    required
                                />
                            </TouchableOpacity>
                            <CardForm
                                isModalVisible={isCardFormModalVisible}
                                toggleModal={toggleCardFormModal}
                                handleCategorySelection={handleCardFormSelection}
                            />
                            
                            <StyledTextInputLabel>Gift card country (optional)</StyledTextInputLabel>
                            <TouchableOpacity onPress={toggleCardCountryModal}>
                                <StyledTextInput
                                    placeholder="Select"
                                    placeholderTextColor={inputPlaceholder}
                                    value={selectedCardCountry}
                                    editable={false}
                                    required
                                />
                            </TouchableOpacity>
                            <CardCountry
                                isModalVisible={isCardCountryModalVisible}
                                toggleModal={toggleCardCountryModal}
                                handleCategorySelection={handleCardCountrySelection}
                            />
                           <StyledTextInputLabel>Gift Card Type</StyledTextInputLabel>
                            <TouchableOpacity onPress={toggleCardSubCategoryModal}>
                                <StyledTextInput
                                    placeholder="Select"
                                    placeholderTextColor={inputPlaceholder}
                                    value={selectedSubCategory}
                                    editable={false}
                                    required
                                />
                            </TouchableOpacity>
                            <SubCategory
                                isModalVisible={isCardSubCategoryModalVisible}
                                toggleModal={toggleCardSubCategoryModal}
                                handleCategorySelection={handleSubCategorySelection}
                            />
                            <StyledTextInputLabel>Amount (minimum amount) </StyledTextInputLabel>
                            <StyledTextInput 
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <StyledTextInputLabel>Upload gift card image</StyledTextInputLabel>
                            <AllUploadedImages> 
                                <SelectedImages>
                           
                                  {images.map((imageUri, index) => (
                                    <AddedImages key={index}>
                                        <GiftCardImage>
                                        <Image
                                            source={{ uri: imageUri }}
                                            style={{ width: 80, height: 80, borderRadius: 50}}
                                        />
                                        </GiftCardImage>
                                        <DeleteImageBtn onPress={() => deleteImage(index)}>
                                        <Text style={{ fontSize: 100, color: danger}}>-</Text>
                                        </DeleteImageBtn>
                                    </AddedImages>
                                    ))}
                                  </SelectedImages>
                                    <TouchableOpacity onPress={pickImage}>
                                    <GiftcardImageUpload/>
                                    </TouchableOpacity>
                            </AllUploadedImages>
                            

                            <StyledTextInputLabel>If Image is blury, enter code here (optional)</StyledTextInputLabel>
                            <StyledTextInput 
                                placeholder="Card code"
                                placeholderTextColor={inputPlaceholder}
                                onChangeText={handleChange('cardCode')}
                                onBlur={handleBlur('cardCode')}
                                value={values.cardCode}
                                keyboardType="default"
                            />

                            <StyledTextInputLabel>Comment</StyledTextInputLabel>
                            <StyledTextInput 
                                placeholder="leave a comment here (Optional)"
                                placeholderTextColor={inputPlaceholder}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <StyledTextInputLabel>Promo code</StyledTextInputLabel>
                            <SmallInputAndButtonContainer>
                                <InputFieldShort
                                placeholder= "Enter Promo code"
                                placeholderTextColor={inputPlaceholder}
                                />
                                <ButtonRight>
                                    <ButtonRighText>Apply</ButtonRighText>
                                </ButtonRight>
                            </SmallInputAndButtonContainer>
                            <CardRateContainer>
                                <CardRateInner>
                              <View>
                                <CardRateTopText>Rate</CardRateTopText>
                              </View>
                                <BottomTextContainer>
                                   <View>
                                    <CardTotalText>Total</CardTotalText>
                                   </View>
                                    <View>
                                        <CardPriceText>23,400.00</CardPriceText>
                                    </View>
                                </BottomTextContainer>
                                </CardRateInner>
                                
                                
                            </CardRateContainer>
                            <StyledButton onPress={() => {
                                handleSubmit(); // Handle form submission

                                // Show the success modal
                                toggleSuccessModal();
                                }}
                                >
                                <ButtonText>Proceed</ButtonText>
                            </StyledButton>
                        </StyledFormArea>
                    )}
                </Formik>
                </ScrollView>
            </MainContainer>
        </StyledContainer>

               {/* ==========================Success Modal ============================= */}
       <Modal
        isVisible={isSuccessModalVisible}
        style={{ margin: 0}}
        backdropOpacity={0.5}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <SuccessAlertModal>
          <AlertModalIcon onPress={toggleSuccessModal}>
            <Octicons name="x" size={30} color= {white} />
          </AlertModalIcon>
          <CheckIcon source={require("../../assets/icons/check.png")} />
          <AlertModalText>Your transaction is processing!</AlertModalText>
        <AlertModalTextSpan>You will be notified once your transaction is complete.</AlertModalTextSpan>
        </SuccessAlertModal>
      </Modal>

        </SafeAreaView>
    );
};
export default SellGiftcard;

import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text, ScrollView, Image, FlatList} from "react-native";
import Modal from "react-native-modal";
// import DocumentPicker from 'react-native-document-picker'


// ======icon==============
import { Octicons } from '@expo/vector-icons';

//////components--------
import {
    StyledContainer,StyledButton, ButtonText,Colors,MainContainer,ScreenTitles,StyledFormArea,
    StyledTextInput,StyledTextInputLabel,BottomTextContainer,CardPriceText,SmallInputAndButtonContainer,
    SelectedImages, DeleteImageBtn, SuccessAlertModal,AlertModalIcon, CheckIcon,AlertModalText,
    AlertModalTextSpan,
} from '../../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";

const { backgroundColor, inputPlaceholder, danger, white} = Colors;



const UserVerification = ({navigation}) => { 
    const [userData, setUserData] = useState({ firstName: '', lastName: '', nin: '', idCard: '', picture: ''});
    const [images, setImages] = useState([]); // State for managing selected images
        // State for the success modal
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  
    // Function to show/hide the success modal
    const toggleSuccessModal = () => {
        setSuccessModalVisible(!isSuccessModalVisible);
    };
   
  // ==============pdf ducument picker===============
//  const selectDoc = async () => {
//   try{
//     const doc = await DocumentPicker.pick();
//     type: [DocumentPicker.types.pdf, DocumentPicker.types.doc]
//     console.log(doc)
//   } catch(err) {
//     if(DocumentPicker.isCancel(err))
//     console.log("User cancelled the upload", err)
//   else
//     console.log(err)
//   }
//  }


    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StyledContainer>
            <StatusBar style="light" backgroundColor= {backgroundColor}/>
            <MainContainer>
                <ScreenTitles>Verify Your Identity</ScreenTitles> 
                <ScrollView>

               
               
             {/* ===============FORM SECTION================ */}
             <Formik initialValues={userData}
                    onSubmit={(values) => {
                        console.log(values) ; 
                    }}   
                    >

                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>

                            <StyledTextInputLabel>First name</StyledTextInputLabel>
                            <StyledTextInput 
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                value={values.firstName}
                                placeholder= "Enter your first name"
                                keyboardType="default"
                                placeholderTextColor={inputPlaceholder}
                            />
                            <StyledTextInputLabel>Last name</StyledTextInputLabel>
                            <StyledTextInput 
                                onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('email')}
                                value={values.lastName}
                                placeholder= "Enter your last name"
                                keyboardType="default"
                                placeholderTextColor={inputPlaceholder}
                            />
                            <StyledTextInputLabel>Any valid document(Drivers license, National ID, International Passport)</StyledTextInputLabel>
                            <StyledTextInput 
                                onChangeText={handleChange('idCard')}
                                onBlur={handleBlur('idCard')}
                                value={values.idCard}
                                placeholder= "Enter your first name"
                                keyboardType="default"
                                placeholderTextColor={inputPlaceholder}
                            />
                            <StyledTextInputLabel>National Identification number(NIN)</StyledTextInputLabel>
                            <StyledTextInput 
                                onChangeText={handleChange('nin')}
                                onBlur={handleBlur('nin')}
                                value={values.nin}
                                placeholder= "Enter your NIN"
                                keyboardType="default"
                                placeholderTextColor={inputPlaceholder}
                            />
                            <StyledTextInputLabel>Upload gift card image</StyledTextInputLabel>
                           <TouchableOpacity >
                              <View >
                                  <Text>Upload</Text>
                                </View>
                           </TouchableOpacity>
                            

                        
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
          <AlertModalText>Your request has been submited. </AlertModalText>
        <AlertModalTextSpan>You wll be notified soon, with our decision</AlertModalTextSpan>
        </SuccessAlertModal>
      </Modal>

        </SafeAreaView>
    );
};
export default UserVerification;
import React, { useState } from "react";
import { StatusBar, Image, TouchableOpacity, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker"; // Import ImagePicker from Expo

// ======icon==============
import { Octicons } from '@expo/vector-icons';

//////components--------
import {
    StyledContainer,
    Colors,
    ButtonStyle,
    ButtonText,
    MainContainer,
    ScreenTitles,
    DisplaySelectedImage,
    UploadMoreImage,
    ImageConfirmationConatiner,
    AddMoreText,
} from '../styles/styles';

const { backgroundColor } = Colors;

const GiftCardConfirmation = ({ route, navigation }) => {
    const { image } = route.params;

    const [additionalImages, setAdditionalImages] = useState([]);
    const maxImageCount = 3;

    const pickImage = async () => {
        // Check if permission to access the image library is granted
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (status !== 'granted') {
            console.log('Permission denied to access image library');
            return;
        }

        // Launch the image picker
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.cancelled) {
            // Check if the maxImageCount is reached
            if (additionalImages.length < maxImageCount - 1) {
                // Add the selected image to the additionalImages array
                setAdditionalImages([...additionalImages, result.uri]);
            } else {
                console.log('Max image count reached');
            }
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>  
        <StyledContainer>
            <StatusBar style="light" backgroundColor={backgroundColor}/>
            <MainContainer>
                <ScreenTitles>Confirm Details</ScreenTitles>
                <View>
                    {/* Display additional images in a grid layout */}
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {additionalImages.map((img, index) => (
                            <Image
                                key={index}
                                source={{ uri: img }}
                                style={{ width: 100, height: 100, margin: 5 }}
                            />
                        ))}
                    </View>
                    <ImageConfirmationConatiner>
                    {/* Display the selected image */}
                    <DisplaySelectedImage>
                        {image && (
                            <Image
                                source={{ uri: image }}
                                style={{ width: 200, height: 200 }}
                            />
                        )}
                    </DisplaySelectedImage>
                   
                    {/* Add a button to upload more photos */}
                    {additionalImages.length < maxImageCount && (
                        <TouchableOpacity onPress={pickImage}>
                            <UploadMoreImage>
                                <AddMoreText>ADD+</AddMoreText>
                            </UploadMoreImage>
                            
                        </TouchableOpacity>
                    )}
                      </ImageConfirmationConatiner>
                </View>
            </MainContainer>
        </StyledContainer>
        </SafeAreaView>
    );
};

export default GiftCardConfirmation;

import React, { useState, useEffect, useContext } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  Platform,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

// ======icon==============
import { Octicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";

//////components--------
import {
  StyledContainer,
  Colors,
  MainContainer,
  ScreenTitles,
  ContentMarginTop,
  ProfileImageContainer,
  UploadProfileImage,
  ProfilePicture,
  SmallInputContainer,
  ProfileInputSmall,
  StyledTextInputLabel,
  StyledTextInput,
  ButtonText,
  StyledFormArea,
  ProfileInputField,
  ProfleInputfieldContainer,
  StyledButton,
  ProfileNameContainer,
  ProfileNameText,
  UserNameText,
  ImageContainer,
  CameraIconBg,
  CameraIconContainer,
  TextLink,
  TextLinkContent,
} from "../styles/styles";
import { Context } from "../store/context";
import { update } from "../util/auth";

const defaultProfileImage = require("../assets/images/nopicture.png");

const { backgroundColor, inputPlaceholder, primary, inputBg, white } = Colors;

const ProfileSettings = ({navigation}) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    email: "",
  });
  const ctx = useContext(Context);
  const { token } = ctx;
  const [image, setImage] = useState(null);
  console.log(image);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const updateHandler = async () => {
    const data = {
      name: `${userData.firstName} ${userData.lastName}`,
      username: userData.username,
      email: userData.email,
    };
    try {
      const result = await update(data, token);
      if (result.status === "success") {
        const params = {
          token: result.jwtToken,
          name: result.user.name,
          wallet_Balance: result.user.wallet_Balance,
          username: result.user.username,
          email: result.user.email,
        };
        ctx.saveCredential(params);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledContainer>
        <StatusBar style="light" backgroundColor={backgroundColor} />
        <MainContainer>
          <ScreenTitles>Update Profile</ScreenTitles>
          <ContentMarginTop />

          <ProfileImageContainer>
            <ImageContainer>
              <CameraIconContainer onPress={pickImage}>
                <CameraIconBg>
                  <Ionicons name="camera" size={27} color={white} />
                </CameraIconBg>
              </CameraIconContainer>
              <UploadProfileImage>
                <ProfilePicture>
                  {image ? (
                    <Image
                      source={{ uri: image }}
                      style={{ width: 100, height: 100 }}
                    />
                  ) : (
                    <Image
                      source={defaultProfileImage}
                      style={{ width: 100, height: 100 }}
                    />
                  )}
                </ProfilePicture>
              </UploadProfileImage>
            </ImageContainer>

            <ProfileNameContainer>
              <ProfileNameText>{ctx.name}</ProfileNameText>
              <UserNameText>{ctx.username && `@${ctx.username}`}</UserNameText>
            </ProfileNameContainer>
          </ProfileImageContainer>
          {/* input fields=============== */}
          <StyledFormArea>
            <SmallInputContainer>
              <ProfileInputSmall
                placeholder="First name"
                placeholderTextColor={inputPlaceholder}
                onChangeText={(text) => {
                  setUserData({ ...userData, firstName: text });
                }}
              />
              <ProfileInputSmall
                placeholder="Last name"
                placeholderTextColor={inputPlaceholder}
                onChangeText={(text) => {
                  setUserData({ ...userData, lastName: text });
                }}
              />
            </SmallInputContainer>
            <ProfleInputfieldContainer>
              <ProfileInputField
                placeholder="Username"
                placeholderTextColor={inputPlaceholder}
                onChangeText={(text) => {
                  setUserData({ ...userData, username: text });
                }}
              />
              <ProfileInputField
                placeholder="Phone number"
                placeholderTextColor={inputPlaceholder}
                onChangeText={(text) => {
                  setUserData({ ...userData, phone: text });
                }}
              />
              <ProfileInputField
                placeholder="Email"
                placeholderTextColor={inputPlaceholder}
                onChangeText={(text) => {
                  setUserData({ ...userData, email: text });
                }}
              />
            </ProfleInputfieldContainer>
            <StyledButton onPress={updateHandler}>
              <ButtonText>UPDATE</ButtonText>
            </StyledButton>
            <TextLink onPress={() => navigation.navigate('UserVerification')}>
                <TextLinkContent>Request verification</TextLinkContent>
            </TextLink>
          </StyledFormArea>
        </MainContainer>
      </StyledContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cameraIcon: {
    flex: 1,
    position: "absolute",
    marginTop: 30,
  },
});

export default ProfileSettings;
import React, { useContext, useState } from "react";
import { ImageBackground, View } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

//////components--------
import {
  Colors,
  SideBarNav,
  ProfileImage,
  UserInfo,
  UserEmail,
  UserName,
  BottomNav,
  BottomNavText,
} from "../styles/styles";
import { CommonActions } from "@react-navigation/native";

const { backgroundColor, inputPlaceholder, white, inputBg, danger } = Colors;

// ======icon==============
import { Octicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";
import { Context } from "../store/context";

const CustomDrawer = (props) => {
  const ctx = useContext(Context);
  console.log(props.descriptors.length);
  const navigation = props.navigation;

  return (
    <SideBarNav>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: backgroundColor }}
      >
        <ImageBackground
          source={require("../assets/images/Profilebg-image.png")}
          style={{
            padding: 20,
            paddingTop: 50,
            height: 150,
            JustifyContent: "center",
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <ProfileImage
            source={require("../assets/images/profile-image.jpeg")}
          />
          <UserInfo>
            <UserName>{ctx.name}</UserName>
            <UserEmail>{ctx.email}</UserEmail>
          </UserInfo>
        </ImageBackground>
        {/* <DrawerItemList {...props} /> */}
        <DrawerItem
          icon={() => (
            <Ionicons
              name="person-outline"
              size={20}
              color={inputPlaceholder}
            />
          )}
          label="My Profile"
          labelStyle={{ fontSize: 16, color: inputPlaceholder }}
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {
                    name: "MainContent",
                    state: {
                      routes: [
                        {
                          name: "Settings",
                        },
                      ],
                      index: 0,
                    },
                  },
                  {
                    name: "ProfileSettings",
                  },
                ],
              })
            );
          }}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 5,
            borderBottomWidth: 1,
            borderBottomColor: inputBg,
          }}
        ></DrawerItem>
        <DrawerItem
          icon={() => (
            <Ionicons
              name="calculator-outline"
              size={20}
              color={inputPlaceholder}
            />
          )}
          label="Rate Calculator"
          labelStyle={{ fontSize: 16, color: inputPlaceholder }}
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {
                    name: "MainContent",
                  },
                  {
                    name: "RateCalculator",
                  },
                ],
              })
            );
          }}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 5,
            borderBottomWidth: 1,
            borderBottomColor: inputBg,
          }}
        ></DrawerItem>
        <DrawerItem
          icon={() => (
            <Ionicons
              name="wallet-outline"
              size={20}
              color={inputPlaceholder}
            />
          )}
          label="My Bank Account"
          labelStyle={{ fontSize: 16, color: inputPlaceholder }}
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {
                    name: "MainContent",
                    state: {
                      routes: [
                        {
                          name: "Wallet",
                        },
                      ],
                      index: 0,
                    },
                  },
                  {
                    name: "AddBankAccount",
                  },
                ],
              })
            );
          }}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 5,
            borderBottomWidth: 1,
            borderBottomColor: inputBg,
          }}
        ></DrawerItem>
        <DrawerItem
          icon={() => (
            <Ionicons name="share-outline" size={20} color={inputPlaceholder} />
          )}
          label="Referral"
          labelStyle={{ fontSize: 16, color: inputPlaceholder }}
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {
                    name: "MainContent",
                  },
                  {
                    name: "Referral",
                  },
                ],
              })
            );
          }}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 5,
            borderBottomWidth: 1,
            borderBottomColor: inputBg,
          }}
        ></DrawerItem>
        <DrawerItem
          icon={() => (
            <Ionicons
              name="help-circle-outline"
              size={20}
              color={inputPlaceholder}
            />
          )}
          label="Help & Support"
          labelStyle={{ fontSize: 16, color: inputPlaceholder }}
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {
                    name: "MainContent",
                  },
                  {
                    name: "Support",
                  },
                ],
              })
            );
          }}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 5,
            borderBottomWidth: 1,
            borderBottomColor: inputBg,
          }}
        ></DrawerItem>
        <DrawerItem
          icon={() => (
            <Ionicons name="log-out-outline" size={20} color={danger} />
          )}
          label="Logout"
          labelStyle={{ fontSize: 16, color: danger }}
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {
                    name: "AuthStack",
                  },
                  {
                    name: "Login",
                  },
                ],
              })
            );
          }}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 5,
            paddingBottom: 20,
          }}
        ></DrawerItem>

        {/* <DrawerItem
          style={{
            backgroundColor: "red",
          }}
          label="Help"
          onPress={() => Linking.openURL("https://mywebsite.com/help")}
        /> */}
      </DrawerContentScrollView>
      <BottomNav>
        <BottomNavText>Rate App</BottomNavText>
        <BottomNavText>App version: 1.0</BottomNavText>
      </BottomNav>
    </SideBarNav>
  );
};

export default CustomDrawer;

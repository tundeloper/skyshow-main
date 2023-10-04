import React, { useState, useEffect, useContext } from "react";
import { StatusBar, Linking, Image } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import QRCode from "react-native-qrcode-svg";

//////components--------
import {
  StyledContainer,
  Colors,
  MainContainer,
  ScreenTitles,
  WalletAddressContainer,
  WalletAddressTitle,
  DownloadQrCode,
  DownloadQrCodeText,
  CryptoInputContainer,
  CryptoCopyBtn,
  CryptoAddressInput,
  ButtonText,
  CryptoAddressDetails,
  StyledButtonVarient,
  ButtonTextBlue,
  StatusAlert,
  StatusAlertText,
} from "../styles/styles";

import { SafeAreaView } from "react-native-safe-area-context";
import { generateBTC } from "../util/auth";
import { Context } from "../store/context";

const { backgroundColor, inputPlaceholder, white } = Colors;

const GenerateBtcWallet = ({ navigation }) => {
  // getting token from store
  const ctx = useContext(Context);
  const { token } = ctx;

  const [walletAddress, setWalletAddress] = useState("");
  const [isError, setisError] = useState("");
  const [isQrCodeGenerated, setIsQrCodeGenerated] = useState(false);
  const [copyMessageVisible, setCopyMessageVisible] = useState(false);

  useEffect(() => {
    // Generate a random BTC wallet address when the component mounts
    const randomAddress = generateRandomBtcAddress();
    setIsQrCodeGenerated(false); // Reset the QR code flag
  }, []);

  const generateRandomBtcAddress = async () => {
    try {
      const result = await generateBTC(token);
      setWalletAddress(result.address);
    } catch (error) {
      setisError(error.message);
      console.log(error.message);
    }
    // Replace this with your BTC address generation logic
    return Math.random().toString(36).substring(2, 15);
  };

  const handleCopy = () => {
    Clipboard.setStringAsync("walletAddress");
    setCopyMessageVisible(true);
    // Hide the message after a certain duration (e.g., 2 seconds)
    setTimeout(() => {
      setCopyMessageVisible(false);
    }, 10000);
  };

  const handleDownloadQrCode = () => {
    // Generate and download the QR code
    alert("QR code downloaded");
  };

  const handleOpenQrCode = () => {
    setIsQrCodeGenerated(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledContainer>
        <StatusBar style="light" backgroundColor={backgroundColor} />
        <MainContainer>
          <ScreenTitles>BTC Wallet</ScreenTitles>
          {copyMessageVisible && (
            <View style={{ backgroundColor: "#fff" }}>
              <Text style={{ color: { backgroundColor } }}>Copied</Text>
            </View>
          )}
          <WalletAddressContainer>
            <WalletAddressTitle>Btc Wallet Address</WalletAddressTitle>
            {isQrCodeGenerated ? (
              <QRCode
                value=""
                size={200}
                backgroundColor="white"
                color="black"
              />
            ) : (
              <Image
                source={require("../assets/images/qrcode.png")}
                style={{ width: 200, height: 200 }}
              />
            )}
            <DownloadQrCode onPress={handleDownloadQrCode}>
              <Octicons name="download" size={18} color={white} />
              <DownloadQrCodeText>Download QR Code</DownloadQrCodeText>
            </DownloadQrCode>
            <CryptoInputContainer>
              <CryptoAddressInput disable={true} value={walletAddress} />
              <CryptoCopyBtn onPress={handleCopy}>
                <ButtonText>Copy</ButtonText>
              </CryptoCopyBtn>
            </CryptoInputContainer>

            <CryptoAddressDetails>
              You can receive BTC with the QR code or address above. It would
              automatically be converted and added to your account balance.
            </CryptoAddressDetails>
            <StyledButtonVarient>
              <ButtonTextBlue onPress={handleOpenQrCode}>
                View BTC rates
              </ButtonTextBlue>
            </StyledButtonVarient>
          </WalletAddressContainer>
        </MainContainer>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default GenerateBtcWallet;

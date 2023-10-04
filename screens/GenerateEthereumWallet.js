import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text, Image } from "react-native";
import * as Clipboard from "expo-clipboard";
import { useEffect } from "react";

//icons ========
import { Octicons } from "@expo/vector-icons";

//////components--------
import {
  StyledContainer,
  Colors,
  MainContainer,
  ScreenTitles,
  WalletAddressContainer,
  WalletAddressTitle,
  WalletAddressQrCode,
  DownloadQrCode,
  DownloadQrCodeText,
  CryptoInputContainer,
  CryptoCopyBtn,
  CryptoAddressInput,
  ButtonText,
  CryptoAddressDetails,
  StyledButtonVarient,
  ButtonTextBlue,
} from "../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { generateEthereumWallet } from "../util/auth";
import { Context } from "../store/context";

const { backgroundColor, inputPlaceholder, white } = Colors;

const GenerateEthereumWallet = ({ navigation }) => {
  const { token } = useContext(Context);
  const [walletAddress, setWalletAddress] = useState("");
  const [isError, setisError] = useState("");
  const [isQrCodeGenerated, setIsQrCodeGenerated] = useState(false);

  useEffect(() => {
    // Generate a random BTC wallet address when the component mounts
    const randomAddress = generateRandomBtcAddress();
    console.log(randomAddress);
    setWalletAddress(randomAddress.EtherAddress);
    setIsQrCodeGenerated(false); // Reset the QR code flag
  }, []);

  const generateRandomBtcAddress = async () => {
    try {
      const result = await generateEthereumWallet(token);
      setWalletAddress(result.data.EtherAddress);
      console.log(result);
    } catch (error) {
      setisError(error.message);
      console.log(error.message);
    }
    // Replace this with your BTC address generation logic
    // For demonstration purposes, we'll generate a random string here
    return Math.random().toString(36).substring(2, 15);
  };

  const handleCopy = () => {
    Clipboard.setStringAsync(walletAddress);
    alert("Copied");
  };

  const handleDownloadQrCode = () => {
    // Generate and download the QR code (save it to the device or send it to an API to get a download link)
    // For simplicity, we'll just show an alert here
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
          <WalletAddressContainer>
            <WalletAddressTitle>Btc Wallet Address</WalletAddressTitle>
            {isQrCodeGenerated ? (
              <QRCode
                value={walletAddress}
                size={200}
                backgroundColor="white"
                color="black"
              />
            ) : (
              <Image
                source={require("../assets/images/qrcode.png")} // You can replace this with your actual QR code
                style={{ width: 200, height: 200 }}
              />
            )}
            <DownloadQrCode onPress={handleDownloadQrCode}>
              <Octicons name="download" size={18} color={white} />
              <DownloadQrCodeText>Download QR Code</DownloadQrCodeText>
            </DownloadQrCode>
            <CryptoInputContainer>
              <CryptoAddressInput value={walletAddress} />
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

export default GenerateEthereumWallet;

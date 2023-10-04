import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import Modal from "react-native-modal"; // Import react-native-modal

// ======icon==============
import { Octicons } from "@expo/vector-icons";

//////components-------
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
  ContentMarginTop,
  SaveAccountDetails,
  ModalContainer,
  InputModal,
  InputModalTitle,
  ItemName,
  CloseButton,
  InputModalHeading,
} from "../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import { Context } from "../store/context";
import { addBank, getBankList } from "../util/auth";

const { backgroundColor, inputPlaceholder } = Colors;

// Sample bank
// Dev Data not needed again already fetch data
// const bankData = [
//   { id: 1, name: "ACCESS BANK" },
//   { id: 2, name: "GTB PLC" },
//   { id: 3, name: "UNITED BANK OF AFRICA (UBA)" },
//   { id: 4, name: "STANBIC BANK" },
//   { id: 5, name: "FIRST BANK" },
//   { id: 6, name: "STERLING BANK PLC" },
//   { id: 7, name: "PROVIDUS BANK" },
//   { id: 8, name: "MONIE POINT" },
//   { id: 9, name: "PAGA MICROFIANCE BANK" },
//   { id: 10, name: "FIRST BANK" },
//   { id: 11, name: "ACCESS BANK" },
//   { id: 12, name: "GTB PLC" },
//   { id: 13, name: "UNITED BANK OF AFRICA (UBA)" },
//   { id: 14, name: "STANBIC BANK" },
//   { id: 15, name: "FIRST BANK" },
//   // Add more banks as needed
// ];

const ChooseBank = ({ navigation }) => {
  const [banList, setBankList] = useState([]);
  const [isBankModalVisible, setBankModalVisible] = useState(false);
  const [accountName, setAccountName] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [userData, setUserData] = useState({
    number: "",
    bankName: "",
    acctName: "",
  });
  const ctx = useContext(Context);
  const toggleBankModal = () => {
    setBankModalVisible(!isBankModalVisible);
  };
  useEffect(() => {
    const data = async () => {
      try {
        const response = await getBankList(userData, ctx.token);
        setBankList(response.bank);
        // console.log(result);
      } catch (error) {}
    };
    data();
  }, [userData]);

  const storeBankHandler = async (values) => {
    try {
      const result = await addBank(values, ctx.token);
      if (result.status === "success") {
        setAccountName(result.data.AccountName);
        ctx.saveCredential({ token: result.jwtToken });
        setTimeout(() => {
          navigation.navigate(
            "BankCard",
            ////// send params to next screen
            ////// send params to next screen
            ////// send params to next screen
            ////// send params to next screen
            {
              accountName: result.data.AccountName,
              accountNumber: result.data.AccountNumber,
              bankName: result.data.BankName,
            }
          );
        }, 3000);
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
          <ScreenTitles>Choose Bank</ScreenTitles>
          {/* ===============FORM SECTION================ */}
          <ContentMarginTop />
          <Formik
            initialValues={userData}
            onSubmit={(values) => {
              values.bankName = selectedBank;
              // console.log(userData, "userdata");
              setUserData(values);
              storeBankHandler(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <StyledTextInputLabel>Account number</StyledTextInputLabel>
                <StyledTextInput
                  placeholder=" Enter account number"
                  placeholderTextColor={inputPlaceholder}
                  onChangeText={handleChange("number")}
                  onBlur={handleBlur("number")}
                  value={values.number}
                  keyboardType="numeric"
                />
                <StyledTextInputLabel>Bank name</StyledTextInputLabel>
                <TouchableOpacity onPress={toggleBankModal}>
                  <StyledTextInput
                    placeholder="Select"
                    placeholderTextColor={inputPlaceholder}
                    onChangeText={handleChange("bankName")}
                    onBlur={handleBlur("bankName")}
                    value={selectedBank}
                    editable={false}
                  />
                </TouchableOpacity>
                <StyledTextInputLabel>Account name </StyledTextInputLabel>
                <StyledTextInput
                  onChangeText={handleChange("acctName")}
                  onBlur={handleBlur("acctName")}
                  value={accountName}
                  keyboardType="default"
                  editable={false}
                />
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Save bank account</ButtonText>
                </StyledButton>
                <SaveAccountDetails>
                  Ensure to add accounts you have easy {"\n"} access to
                </SaveAccountDetails>
              </StyledFormArea>
            )}
          </Formik>
        </MainContainer>
      </StyledContainer>

      {/* Bank Selection Modal */}
      <Modal
        isVisible={isBankModalVisible}
        style={{ margin: 0 }} // Use this to make the modal cover the entire screen
        onBackdropPress={toggleBankModal}
        backdropOpacity={0.5}
        animationIn="slideInUp" // Specify the animation you want
        animationOut="slideOutDown" // Specify the animation for closing
      >
        <ModalContainer>
          <InputModal>
            <InputModalHeading>
              <InputModalTitle>Select a Bank</InputModalTitle>
              <CloseButton onPress={toggleBankModal}>
                <Octicons name="x" size={24} color="white" />
              </CloseButton>
            </InputModalHeading>
            <FlatList
              data={banList} //bankData
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedBank(item.name);
                    // update user account name
                    toggleBankModal();
                  }}
                >
                  <ItemName>{item.name}</ItemName>
                </TouchableOpacity>
              )}
            />
          </InputModal>
        </ModalContainer>
      </Modal>
    </SafeAreaView>
  );
};

export default ChooseBank;
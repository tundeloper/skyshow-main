import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";

//screens --------
import LoadingBarScreen from "../components/LoadingBar";
import ResetPin from "../screens/ResetPin";
import AddBankAccount from "../screens/AddBankAccount";
import SellGiftcard from "../screens/SellGiftCard/SellGiftcard";
import AlertList from "../screens/AlertList";
import BankDetails from "../screens/BankDetails";
import BtcWallet from "../screens/BtcWallet";
import ChangePassword from "../screens/ChangePassword";
import CreatePin from "../screens/CreatePin";
import ChooseBank from "../screens/ChooseBank";
import EthereumWallet from "../screens/EthereumWallet";
import GeneralSettings from "../screens/GeneralSettings";
import GenerateBtcWallet from "../screens/GenerateBtcWallet";
import GenerateEthereumWallet from "../screens/GenerateEthereumWallet";
import GenerateUsdtWallet from "../screens/GenerateUsdtWallet";
import HighCardRates from "../screens/HighCardRates";
import RateAlert from "../screens/RateAlert";
import RateAlertDetails from "../screens/RateAlertDetails";
import RateAlertForm from "../screens/RateAlertForm";
import RateCalculator from "../screens/RateCalculator/RateCalculator";
import SecuritySettings from "../screens/SecuritySettings";
import SignUpOtp from "../screens/SignUpOtp";
import Transactions from "../screens/Transactions/Transactions";
import UsdtWallet from "../screens/UsdtWallet";
import WithdrawFund from "../screens/WithdrawFund";
import WithdrawSuccess from "../screens/WithdrawSuccess";
import BankCard from "../screens/bankCard";
import GetStarted from "../screens/getStarted";
import Home from "../screens/home";
import Login from "../screens/login";
import SellCrypto from "../screens/sellCrypto";
import Settings from "../screens/settings";
import SignUpAuth from "../screens/signUpAuth";
import Signup from "../screens/signup";
import Tutorials from "../screens/tutorials";
import GiftCardConfirmation from "../screens/GiftCardConfirmation";
// side bar screens==========
import ProfileSettings from "../screens/ProfileSettings";
import Support from "../screens/Support";
import Referral from "../screens/referral";
///page=====
import CustomDrawer from "../screens/CustomDrawer";
import Chat from "../screens/ChatScreen/Chat";
import ContactUs from "../screens/ContactUs";
import TemporaryScreen from "../components/TemporaryScreen";
import Notification from "../screens/Notifications/Notification";
import NotificationDetails from "../screens/Notifications/NotificationDetails";
import UserVerification from "../screens/UserVerification/UserVerification";
import GiftcardTransactionDetails from "../screens/Transactions/Giftcard.TransactionDetails";
import Wallet from "../screens/wallet/wallet";
import WithdrawalDetails from "../screens/wallet/withdrawalDetails";
import Withdrawals from "../screens/wallet/withdrawals";
// ====Reset password screens===========
import ResetOtp from "../screens/ResetPassword/ResetOtp";
import ResetOptions from "../screens/ResetPassword/ReserOptions";
import CreateNewPassword from "../screens/ResetPassword/CreateNewPassword";

// colors========
import { Colors } from "../styles/styles";

const { backgroundColor, inputPlaceholder, white } = Colors;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Authentication stack
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: "white",
        headerTransparent: true,
        headerTitle: "",
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      }}
      initialRouteName="TemporaryScreen"
    >
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TemporaryScreen" component={TemporaryScreen} />
      {/* ====reset password========== */}
      <Stack.Screen name="ResetOptions" component={ResetOptions} />
      <Stack.Screen name="ResetOtp" component={ResetOtp} />
      <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
      {/* ===============Signup screens========= */}
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="SignUpOtp" component={SignUpOtp} />
      <Stack.Screen name="SignUpAuth" component={SignUpAuth} />
    </Stack.Navigator>
  );
}

// ===========Loading bar screens===================

function LoadingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: "white",
        headerTransparent: true,
        headerTitle: "",
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      }}
    >
      <Stack.Screen name="LoadingBarScreen" component={LoadingBarScreen} />
    </Stack.Navigator>
  );
}

//===================== Drawer stack=========================
function DrawerStack({ navigation }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "none",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
        headerTintColor: "#fff",
        // headerShown: false,
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 13,
          fontWeight: "500",
          borderBottomWidth: 1,
          borderBottomColor: "#fff",
          paddingBottom: 18,
        },
        headerStyle: {
          backgroundColor: backgroundColor,
          // borderBottomWidth: 10,
          elevation: 0,
          shadowOpacity: 0,
          // paddingVertical: 10,
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="white"
              paddingRight={16}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={Home}
        options={{
          headerTitle: "",
          drawerIcon: () => (
            <Ionicons name="person-outline" size={18} color="white" />
          ),
        }}
      />
      <Drawer.Screen
        name="ProfileSettings"
        component={ProfileSettings}
        options={{
          drawerIcon: () => (
            <Ionicons name="person-outline" size={18} color="white" />
          ),
        }}
      />
      <Drawer.Screen
        name="RateCalculator"
        component={RateCalculator}
        options={{
          drawerIcon: () => (
            <Ionicons name="person-outline" size={18} color="white" />
          ),
        }}
      />
      <Drawer.Screen
        name="AddBankAccount"
        component={AddBankAccount}
        options={{
          drawerIcon: () => (
            <Ionicons name="settings-outline" size={18} color="white" />
          ),
        }}
      />
      <Drawer.Screen
        name="Referral"
        component={Referral}
        options={{
          drawerIcon: () => (
            <Ionicons name="person-outline" size={18} color="white" />
          ),
        }}
      />
      <Drawer.Screen
        name="Support"
        component={Support}
        options={{
          drawerIcon: () => (
            <Ionicons name="person-outline" size={18} color="white" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Bottom Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      options={{
        style: {
          padding: 30,
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "#8B9CC8",
        tabBarActiveTintColor: "#1350E8",
        tabBarActiveBackgroundColor: "rgba(19, 80, 232, 0.3)",
        tabBarItemStyle: {
          paddingBottom: 10,
        },
        tabBarStyle: {
          backgroundColor: "#102249",
          padding: 10,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={DrawerStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Main navigation
export default function MainNavigators() {
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerTintColor: "white",
            headerTransparent: true,
            headerTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 20,
            },
          }}
          initialRouteName="AuthStack"
        >
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainContent"
            component={TabNavigator}
            options={{ headerShown: false }}
          />

          <Stack.Group>
            <Stack.Screen name="HighCardRates" component={HighCardRates} />
            <Stack.Screen name="SellCrypto" component={SellCrypto} />
            <Stack.Screen name="BtcWallet" component={BtcWallet} />
            <Stack.Screen name="SellGiftcard" component={SellGiftcard} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen
              name="NotificationDetails"
              component={NotificationDetails}
            />

            <Stack.Screen
              name="GiftCardConfirmation"
              component={GiftCardConfirmation}
            />
            <Stack.Screen
              name="GenerateBtcWallet"
              component={GenerateBtcWallet}
            />
            <Stack.Screen name="EthereumWallet" component={EthereumWallet} />
            <Stack.Screen
              name="GenerateEthereumWallet"
              component={GenerateEthereumWallet}
            />
            <Stack.Screen name="RateCalculator" component={RateCalculator} />
            <Stack.Screen name="Referral" component={Referral} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
            <Stack.Screen name="UsdtWallet" component={UsdtWallet} />
            <Stack.Screen
              name="GenerateUsdtWallet"
              component={GenerateUsdtWallet}
            />

            <Stack.Screen name="LoadingBarScreen" component={LoadingStack} />
          </Stack.Group>

          {/* { ─── Wallet Screens ──────────────────────────────────────────────} */}
          <Stack.Group>
            <Stack.Screen name="WithdrawFund" component={WithdrawFund} />
            <Stack.Screen name="WithdrawSuccess" component={WithdrawSuccess} />
            <Stack.Screen name="ChooseBank" component={ChooseBank} />
            <Stack.Screen name="BankCard" component={BankCard} />
            <Stack.Screen name="BankDetails" component={BankDetails} />
            <Stack.Screen name="AddBankAccount" component={AddBankAccount} />
          </Stack.Group>

          {/* { ─── Transaction Screens ──────────────────────────────────────────────} */}
          <Stack.Group>
            <Stack.Screen
              name="GiftcardTransactionDetails"
              component={GiftcardTransactionDetails}
            />
          </Stack.Group>

          {/* { ─── Settings Screens ──────────────────────────────────────────────} */}
          <Stack.Group>
            <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
            <Stack.Screen
              name="UserVerification"
              component={UserVerification}
            />
            <Stack.Screen name="GeneralSettings" component={GeneralSettings} />
            <Stack.Screen
              name="SecuritySettings"
              component={SecuritySettings}
            />
            <Stack.Screen name="RateAlert" component={RateAlert} />
            <Stack.Screen name="ResetPin" component={ResetPin} />
            <Stack.Screen name="Tutorials" component={Tutorials} />
            <Stack.Screen name="CreatePin" component={CreatePin} />
            <Stack.Screen name="RateAlertForm" component={RateAlertForm} />
            <Stack.Screen name="AlertList" component={AlertList} />
            <Stack.Screen name="Chat" component={Chat} />
            {/* ====reset password========== */}
            <Stack.Screen name="ResetOptions" component={ResetOptions} />
            <Stack.Screen name="ResetOtp" component={ResetOtp} />
            <Stack.Screen
              name="CreateNewPassword"
              component={CreateNewPassword}
            />
            <Stack.Screen
              name="RateAlertDetails"
              component={RateAlertDetails}
            />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
}

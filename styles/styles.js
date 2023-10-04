import styled from 'styled-components/native';
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

// expo constants 
import Constants from 'expo-constants';

// ==== Dimensions =============
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const theme = {
    primary,
    primaryHover,
    backgroundColor,
    homeHeaderBg,
    cardsBg,
    cardsBorder,
    white,
    black,
    inputBg,
    inputBorderFocus,
    inputPlaceholder,
    success,
    danger,
    darkBlue,
  };
  

//  -------- colors--------

export const Colors = {
    primary: "#1350E8",
    primaryHover: "#144FE1",
    backgroundColor: "#020817",
    homeHeaderBg: "#102249",
    darkBlue: "#071e56",
    cardsBg: "#17203D",
    cardsBorder: "#2E3852",
    white: "#ffffff",
    black: "#000000",
    inputBg: "rgba(19, 80, 232, 0.3)",
    inputBorderFocus: "#1350E8",
    inputPlaceholder: "#8B9CC8",
    success: "#3CDF21",
    danger: "#FF0000",
}

const {primary, primaryHover, backgroundColor, homeHeaderBg, 
    cardsBg, cardsBorder, white, black, inputBg, 
    inputBorderFocus, inputPlaceholder, success, danger, darkBlue} = Colors;
    


export const GetStartedContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 50px;
`;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.backgroundColor}; // Use theme here
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const StatusAlert = styled.View`
  background: ${({ theme }) => theme.white}; // Use theme here
  padding: 10px;
`;

export const StatusAlertText = styled.Text`
  color: ${({ theme }) => theme.success}; // Use theme here
  font-size: 14px;
`;




export const PageTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: ${({theme}) => theme.primary};
    padding: 10px;
`;
export const ScreenTitles = styled.Text`
    fontSize: 20px;
    fontWeight: 600;
    color: ${({theme}) => theme.white};
    textAlign: center;
`;
export const StyledFormArea = styled.View`
    width: 100%;
`;

// ===Input fields===
export const SmallInputAndButtonContainer = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    marginTop: 10px;
`;
export const InputFieldShort = styled.TextInput`
    background-color: ${({theme}) => theme.inputBg};
    padding: 15px;
    padding-left: 25px;
    padding-right: 15px;
    border-radius: 15px;
    font-size: 16px;
    height: 50px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    width: 70%;
    color:  ${({theme}) => theme.inputPlaceholder};
`;
export const  ButtonRight = styled.TouchableOpacity`
    height: 50px;
    background: ${({theme}) => theme.primary};
    width: 28%;
    justifyContent: center;
    textAlign: center;
    borderRadius: 10px;
    alignItems: center;
    padding: 7px;
`;
export const ButtonRighText = styled.Text`
    fontSize: 13px;
    color: ${({theme}) => theme.white};
`;
export const StyledTextInput = styled.TextInput`
    background-color: ${({theme}) => theme.inputBg};
    padding: 15px;
    padding-left: 25px;
    padding-right: 15px;
    border-radius: 15px;
    font-size: 16px;
    height: 50px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color:  ${({theme}) => theme.inputPlaceholder};
`;
export const StyledTextInputLabel = styled.Text`
    fontSize: 14px;
    color:  ${({theme}) => theme.inputPlaceholder};
    marginBottom: 10px;
    marginTop: 15px;
`;

export const RightIcon = styled.TouchableOpacity`
    position: absolute;
    top: 20px;
    right: 15px;
    z-index: 1;
`;
// ====reset password===========

export const NewPasswordText = styled.Text`
    fontWeight: 18px;
    color: ${white};
`;
export const NewPasswordTextContainer = styled.View`
    marginTop: 10px;
`;
// ====end of reset password=========
export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background: ${({theme}) => theme.primary};
    justify-content: center;
    border-radius: 15px;
    width: 100%;
    margin-vertical: 50px;
    height: 60px;
`;
export const StyledButtonVarient = styled.TouchableOpacity`
    padding: 15px;
    background: ${({theme}) => theme.white};
    justify-content: center;
    border-radius: 15px;
    width: 100%;
    height: 60px;
`;
export const ButtonText = styled.Text`
    color: ${({theme}) => theme.white};
    font-size: 16px;
    textAlign: center;
`;
export const ButtonTextBlue = styled.Text`
    color: ${({theme}) => theme.primary};
    font-size: 16px;
    textAlign: center;
`;
export const BodySmallText = styled.Text`
    color: ${({theme}) => theme.white};
    fontSize: 14px;
`; 
//message box===

export const MsgBox = styled.Text`
    text-align: center;
    fontSize: 13px;
    color: ${props => (props.type == 'SUCCESS'? 'green' : 'red' )};
`;
// =========alert pop up========
export const AlertPopUpMessage = styled.View`
    background: ${({theme}) => theme.white};
    padding: 16px;
    width: 100%;
`;
export const AlertPopUpText = styled.Text`
    fontSize: 17px;
`;

// ========input modal===========

export const ModalContainer = styled.View`
    flex: 1;
    justifyContent: flex-end;
`;
export const InputModal = styled.View`
    backgroundColor: ${({theme}) => theme.backgroundColor};
    padding: 20px;
    borderTopLeftRadius: 30px;
    borderTopRightRadius: 30px;
    height: 70%;
`;
export const InputModalTitle = styled.Text`
    fontSize: 20px;
    color: ${({theme}) => theme.white};
    paddingBottom: 18px;
    paddingTop: 15px;
`;
export const ItemName = styled.Text`
    fontSize: 18px;
    color:  ${({theme}) => theme.inputPlaceholder};
    paddingBottom: 10px;
`;
export const InputModalHeading = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
`;
export const MondalSearchBox = styled.TextInput`
    background-color: ${({theme}) => theme.inputBg};
    padding: 8px;
    padding-left: 25px;
    padding-right: 15px;
    border-radius: 15px;
    font-size: 16px;
    height: 40px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color:  ${({theme}) => theme.inputPlaceholder};
`;

// ========================Success modal =========================
export const SuccessAlertModal = styled.View`
   background: ${({theme}) => theme.backgroundColor};
   height: 100%;
   alignItems: center;
   justifyContent: center;
`;
export const AlertModalText = styled.Text`
    fontSize: 20px;
    color: ${({theme}) => theme.white};
    fontWeight: 700;
`;
export const AlertModalTextSpan = styled.Text`
    fontSize: 15px;
    color:  ${({theme}) => theme.inputPlaceholder};
`
export const AlertModalIcon = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    padding: 30px;
    right: 0;
`;
export const CheckIcon = styled.Image`
    marginBottom: 20px;
`;


// ============NOTICE POP UP MODAL==========

export const NoticeModalContainer = styled.View`
    background: ${({theme}) => theme.backgroundColor};
    height: 189px;
    width: 228px;
    borderRadius: 20px;
    padding: 10px;
`;
export const CloseIcon = styled.TouchableOpacity`
    padding: 15px;
`;
export const NoticeContent = styled.View`
    display: flex;
    flexDirection: column;
    alignItems: center;
`;
export const NoticeBtn = styled.View`
    background: ${({theme}) => theme.danger};
    padding: 5px;
    width: 130px;
    alignItems: center;
    borderRadius: 8px;
    marginBottom: 8px;
`;
export const NoticeTitle = styled.Text`
    fontSize: 14px;
    color: ${({theme}) => theme.white};
    fontWeight: 600;
    textAlign: center;
`;
export const NoticeTextSmall = styled.Text`
    fontSize: 10px;
    color:  ${({theme}) => theme.inputPlaceholder};
    textAlign: center;
    marginTop: 7px;
`;



/// login in and signup up CTA-------
export const ToSignupPageBox = styled.View`
    justify-content: center;
    alignItems: center;
    flex-direction: row;
    padding: 10px;
`;
export const ToSignupPageText = styled.Text`
    justify-content: center;
    alignItems: center;
    color: ${({theme}) => theme.white};
    fontSize: 15px;
`;
export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    alignItems: center;
`;
export const TextLinkContent = styled.Text`
    fontSize: 15px;
    color: ${({theme}) => theme.primary};
    fontWeight: 600;
`;
export const ResetPassword = styled.TouchableOpacity`
    alignItems: center;
`;
export const ResetPasswordText = styled.Text`
    fontSize: 15px;
    color: ${({theme}) => theme.primary};
    fontWeight: 600;
    background: 
`;

// =======signup authentication screen===

export const SignupOtpText = styled.Text`
    paddingTop: 20px;
    fontSize: 18px;
    left: 2px;
    color: ${white};
`;
export const SignupOtpContent = styled.View`
    paddingRight: 20px;
    marginTop: 60px;
    marginBottom: 20px;
    color: ${white};
`;

export const RadioButton = styled.View`
`;
export const radioOptions = styled.Text`
    color: ${white};
`;
///=============REFERRAL============
export const ReferralContainer = styled.View`
    height: 400px;
    width: 100%;
    background: ${cardsBg}
    display: flex;
    flexDirection: column;
    gap: 10px;
`;
export const ReferralTitle = styled.Text`
    color: ${white};
    fontWeight: bold;
    fontSize: 18px;
`;
// ==========SLPIT INPUT FIELDS SCREEN============
export const InputSection = styled.View`
    
`;
export const HiddenTextInput = styled.TextInput`
    borderColor: ${primary}
    borderWidth: 2px;
    borderRadius: 5px;
    marginTop: 12px;
    width: 300px;
    color: ${white};
`;
export const CodeInputContainer = styled.Pressable`
    width: 70%;
    flexDirection: row;
    justifyContent: space-around;
`;
export const CodeInput = styled.View`
    borderColor: ${({theme}) => theme.primary};
    minWidth: 15%;
    borderWidth; 2px;
    borderRadius: 5px;
    padding: 12px;
`;
export const CodeInputText = styled.Text`
    fontSize: 22px;
    fontWeight: bold;
    color: ${white};
    textAlign: center;
`;



// ==========OTP VERIFICATION SCREEN============
export const TopHalf = styled.View`
    flex: 1;
    justifyContent: center;
    padding: 20px;
`;
export const BottomHalf = styled.View`
    flex: 1;
    justifyContent: space-around;
    padding: 20px;
`;
export const IconBG  = styled.View`
    width: 250px;
    heifght: 250px;
    background: ${backgroundColor};
    borderRadius: 250px;
    justifyContent; center;
    alignItems; center;
`;





// ======chat widjet ===========
export const ChatWidget = styled.TouchableOpacity`
    position: absolute;
    bottom: 9px;
    right: 2px;
`;
export const ChatIcon = styled.Image`

`;

// get started page ===========

export const GetStartedImg = styled.Image`
    width: 100%;
`;
export const GetStartedTitle = styled.Text`
    marginTop: 30px;
    fontSize: 20px;
    left: 2px;
    color: ${white};
`;

// ========short input modal===========

export const ShortModalContainer = styled.View`
    flex: 1;
    justifyContent: flex-end;
`;
export const ShortModal = styled.View`
    backgroundColor: ${backgroundColor};
    padding: 20px;
    borderTopLeftRadius: 30px;
    borderTopRightRadius: 30px;
    height: 50%;
`;
export const ShortModalHome = styled.View`
    backgroundColor: ${backgroundColor};
    padding: 20px;
    borderTopLeftRadius: 30px;
    borderTopRightRadius: 30px;
    height: 35%;
`;
export const ShortModalTitle = styled.Text`
    fontSize: 20px;
    color: ${white};
    paddingBottom: 18px;
    paddingTop: 15px;
`;
export const ShortModalItemName = styled.Text`
    fontSize: 14px;
    color:  ${({theme}) => theme.inputPlaceholder};
`;
export const ShortModalItemList = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
`;
export const ShortModalHeading = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
`;
export const CardFormOptionsContainer = styled.View`
    display: flex;
    flexDirection: column;
    gap: 20px;
   
`;
export const CardFormOptions = styled.View`
    background: ${cardsBg};
    marginTop: 10px;
    padding: 10px;
    borderRadius: 7px;
`;
export const AllCarddFormTitle = styled.Text`
    fontSize: 13px;
    color: ${inputPlaceholder};
`;
export const CardOptionTitle = styled.Text`
    fontSize: 13px;
    color: ${white};
    fontWeight: bold;
`;
export const CardOptionSmallText = styled.Text`
    fontSize: 12px;
    color: ${inputPlaceholder};
`;
export const ShortModalItemContainer = styled.View`
    flexDirection: row;
    alignItems: center;
    textAlign: center;
    paddingTop: 10px;
    paddingBottom: 15px;
    borderBottomWidth: 1px;
    borderBottomColor:  ${({theme}) => theme.inputPlaceholder};
`;

// =================================================== HOME SCREEN ======================================================================

export const MainContainer = styled.View`
    flex: 1;
    width: 100%;
`;
export const TabContentsContainer = styled.View`
    flex: 1;
    width: 100%;
    background: ${backgroundColor};
    paddingTop: 40px;
    padding: 10px;
`;
export const TabBarContainer = styled.View`
    padding: 16px;
`;
// ======menu icon========
export const HomeMenuContainer = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    marginTop: -10px;
`;
export const HomeMenuIcon = styled.TouchableOpacity`
`;
export const HomeUserContainer = styled.Text`
    gap: 10px;
`;
export const HomeUserName = styled.Text`
    color: ${white};
    fontSize: 18px;
    fontWeight: 600;
`;
export const HomeWaveIcon = styled.Image`
`;

// =====side bar navigation menu==========
export const SideBarNav = styled.View`
    background: ${backgroundColor};
    flex: 1;
`;
export const BackgroundImage = styled.Image`
    padding: 20px;
    height: 150px;
`;
export const ProfileImage = styled.Image`
    height: 40px;
    width: 40px;
    borderRadius: 50px;
`;
export const UserInfo = styled.View`
    display: flex;
    flexDirection: column;
    gap: 5px;
    textAlign: center;
`;
export const UserName = styled.Text`
    color: ${white};
    fontWeight: 700;
    fontSize: 13px;
`;
export const UserEmail = styled.Text`
    color: ${white};
    fontSize: 12px;
`;

export const BottomNav = styled.View`
    alignItems: center;
    padding: 16px;
    paddingBottom: 30px;
`;
export const BottomNavText = styled.Text`
    fontSize: 13px;
    color:  ${({theme}) => theme.inputPlaceholder};
    
`;
// ==========Notification screen==============
export const  NotificationContainer = styled.View`
   display: flex;
   flexDirection: column;
   gap: 10px;
`;
export const NotificationContent = styled.TouchableOpacity`
    background: ${({theme}) => theme.cardsBg};
    height: 120px;
    borderRadius: 10px;
    padding: 10px;
    display: flex;
    flexDirection: column;
    justifyContent: space-between;
    marginBottom: 10px;
`;
export const NotificationTitle = styled.Text`
    color: ${({theme}) => theme.white};
    fontSize: 14px;
    fontWeight: bold;
`;
export const NotificationDateandTimeContainer = styled.View`
   display: flex;
   flexDirection: row;
   justifyContent: space-between;
`;
export const NotificationDate = styled.Text`
    color: ${({theme}) => theme.inputPlaceholder};
    fontSize: 12px;
    marginTop: 5px;
`;
export const NotificationTime = styled.Text`
    color: ${({theme}) => theme.inputPlaceholder};
    fontSize: 12px;
`;
export const NotificationDescription  = styled.Text`
    color: ${({theme}) => theme.inputPlaceholder};
    fontSize: 14px;
`;
export const NotificationContentContainer = styled.View`
    display: flex;
    flexDirection: column;
    gap: 7px;
`;
export const NotificationContentsDes = styled.View`
    
`;

// ==========details page styles===========
export const NotificationDetailsContainer = styled.View`
    display: flex;
    flexDirection: column;
`;
export const NotificationDetailsTop = styled.View`
    display: flex;
    flexDirection: column;
    gap: 10p;
`;
export const NotificationDetailsTitle = styled.Text`
    color: ${({theme}) => theme.white};
    fontSize: 16px;
`;
export const NotificationDetailsDescription = styled.Text`
    color: ${({theme}) => theme.inputPlaceholder};
    fontSize: 17px;
`;
export const NotificationDetailsBottom = styled.View`
    marginTop: 10px;

`;

//  ===== wallet container inside home screen====

export const WalletContainer = styled.View`
    width: 100%;
    background: ${cardsBg};
    height: 130px;
    margin-top: 16px;
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;
    padding: 16px;
`;
// ===left part of wallet=====

export const WalletLeft = styled.View`
    flexDirection: column;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
export const PriceContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
`;
export const IconLeft = styled.Text`
`;
export const IconRight = styled.TouchableOpacity`
`;
export const PriceText = styled.Text`
    color: ${white};
    fontSize: 18px;
    fontWeight: 600;
`;
export const WithdrawButton = styled.TouchableOpacity`
    background: ${inputBg};
    display: flex;
    padding: 8px;
    flex-direction: row;
    gap: 16px;
    width: 120px;
    align-items: center;
    height: 40px;
    borderRadius: 5px;
`;
export const WithdrawButtonText = styled.Text`
    fontSize: 14px;
    color: ${white};
`;
export const WithdrawButtonIcon = styled.Text`
`;

// ===right part of wallet=====

export const WalletRight = styled.View`
    width: 25%;
`;
export const CurrencyBtn = styled.View`
    width: 100%;
    height: 40px;
    background: ${cardsBorder};
    display: flex;
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
    padding: 8px;
    borderRadius: 5px;
`;
export const CurrencyBtnText = styled.Text`
    fontSize: 14px;
    color: ${white};
`;
export const CurrencyBtnIcon = styled.Text`
`;
// ===========BUY GIFT CardS, Crypto, BUY AND PAY BILLS CONTAINERS=======
export const TransactContainer = styled.View`
    marginTop: 8px;
    display: flex;
    flexDirection: row;
    gap: 5px;
`;
export const TradeButton = styled.TouchableOpacity`
    background: ${inputBg};
    height: 110px;
    width: 32.33%;
    borderRadius: 10px;
    display: flex;
    flexDirection: column;
    padding: 8px;
`;
export const TradeButtonIcon = styled.Text`
    background-color: ${white};
    height: 25px;
    width: 25px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    borderRadius: 25px;
    paddingTop: 5px;
`;
export const TradeButtonTitle = styled.Text`
    fontSize: 14px;
    fontWeight: 600;
    color: ${white};
`;
export const TradeButtonDetails = styled.Text`
    fontSize: 11px;
    color:  ${({theme}) => theme.inputPlaceholder};
`;
// ===========Buy and sell gift cards=========

export const BuyOrSell = styled.View`
    display: flex;
    flexDirection: row;
    gap: 10px;
    justifyContent: space-between;
    paddingTop: 20px;
`;
export const Buy = styled.View`
    background: ${inputBg};
    padding: 10px;
    height: 160px;
    width: 48%;
    borderRadius: 15px;
    disply: flex;
    flexDirection: column;
    gap: 15px;
    
`;
export const Sell = styled.TouchableOpacity`
    background: ${inputBg};
    padding: 10px;
    height: 160px;
    width: 48%;
    borderRadius: 15px;
    disply: flex;
    flexDirection: column;
    gap: 15px;
    

`;
export const IwantTo = styled.Text`
    fontSize: 24px;
    color: ${white};
    fontWeight: 700;
`;
export const TextsContent = styled.View`
    display: flex;
    flexDirection: column;
    gap: 5px;
`;
export const IconContent = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
`;
export const BuyOrSellTitle = styled.Text`
    fontSize: 17px;
    fontWeight: 600;
    color: ${white};
`;
export const BuyOrSellDetails = styled.Text`
    fontSize: 10px;
    color:  ${({theme}) => theme.inputPlaceholder};
`;
export const ComingSoonBtn = styled.View`
    padding: 5px;
    background:${danger};
    borderRadius: 8px;
    height: 25px;
    textAlign: center;
    justifyContent: center;
`;
export const ComingSoonBtnText = styled.Text`
    fontSize: 10px;
    color: ${white};
`;
export const InComingIcon = styled.View`
    height: 50px;
    width: 50px;
    borderRadius: 50px;
    background: ${danger};
    padding: 5px;
    display: flex;
    justifyContent: center;
    alignItems: center;
`;
export const SheetHeading = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
`;
export const CloseButton = styled.TouchableOpacity`
    paddingRight: 12px;
    positon: absolute;
`;
export const OutGoingIcon = styled.View`
    height: 50px;
    width: 50px;
    borderRadius: 50px;
    background: ${success};
    padding: 5px;
    display: flex;
    justifyContent: center;
    alignItems: center;
`;





// ===bottom slider===

export const BottomSlide = styled.View`
    background: ${white};
    z-index: 2;
`;



// ====LOADING BAR CONTAINER========
export const LoadingBarMain = styled.View`
    
`;
export const LoadingBarText = styled.View`
    marginTop: 16px;
    display: flex;
    justifyContent: space-between;
    flexDirection: row;
`;
export const BarPercentage = styled.Text`
    color: ${white};
    fontSize: 16px;
`;
export const FinishSetUp = styled.Text`
    color: ${({theme}) => theme.primary};
    fontSize: 16px;
`;
export const LoadingBarConatiner = styled.View`
    width: 100%;
    height: 10px;
    background-color: #ccc;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 8px; 
`;
export const LoadingBar = styled.View`
    height: 100%;
    width: 40%;
    background-color: blue;
`;
// ====NOTIFICATION IMAGE SLIDER CONTAINER===========

// export const SliderImageContainer = styled.View`
//     paddingTop: 8px;
//     flex: 1;
// `;
// export const ImageSlide = styled.Image`
//     width: 358px;
//     height: 100%;
//     borderRadius: 15px;
//     resizeMode: cover;
// `;

// export const NotificationContainer = styled.View`
//     paddingTop: 8px;
//     display: flex;
//     flexDirection: row;
//     justifyContent: space-between;
// `;
// export const NoticeText = styled.Text`
//     fontSize: 16px;
//     color: ${white};
//     fontWeight: 700;
// `;
// export const MoreText = styled.Text`
//     fontSize: 16px;
//     color: ${({theme}) => theme.primary};
// `;

// ==HIGH CARD RATES BUTTON=======

export const HighCardRatesButton = styled.TouchableOpacity`
    width: ${windowWidth - 32}px; 
    height: ${windowHeight / 5}px;
    background-color: ${inputBg};
    marginTop: 16px;
    borderRadius: 15px;
    padding: 16px;
    paddingTop: 6px;
    paddingRight: 0px;
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    overflow: hidden;
`;
// left========
export const HighCardRatesButtonLeft = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    paddingTop: 10px;
    paddingBottom: 10px;
`;
export const HighCardRatesButtonTitle = styled.Text`
    fontSize: 19px;
    fontWeight: 700;
    color: ${white};
`;
export const HighCardRatesButtonDetails = styled.Text`
    fontSize: 15px;
    color:  ${({theme}) => theme.inputPlaceholder};
`;
// ==right=============
export const HighCardRatesButtonImage = styled.Image`
    width: 100px;
    height: 120px;
`;
// =================================================WITHDRAW FUNDS SCREEN==================================================================

// ===balance====
export const BalanceContainer = styled.View`
    width: 100%;
    height: 100px;
    background: ${inputBg};
    marginTop: 50px;
    marginBottom: 30px;
    border: 1px solid ${({theme}) => theme.primary};
    alignItems: center;
    justifyContent: center;
`;
export const BalanceTitle = styled.Text`
    fontSize: 14px;
    color:  ${({theme}) => theme.inputPlaceholder};
`;
export const Balance = styled.View`
    display: flex;
    flexDirection: row;
    marginTop: 8px;
`;
export const BalanceAmount = styled.Text`
    fontSize: 16px;
    color: ${white};
`;
export const NairaIcon = styled.Text`
`;









// =================================================SELL GIFT CARD SCREEN==================================================================

export const CardRateContainer = styled.Text`
    marginTop: 16px;
    background: ${cardsBg};
    width: 100%;
    height: 120px;
    borderRadius: 15px;
    display: flex;
    flexDirection: column;
    padding: 16px;
   
`;
export const CardRateInner = styled.View`
    display: flex;
    flexDirection: column;
    gap: 7px;
    padding: 16px;
`;
export const CardRateTopText = styled.Text`
    fontSize: 14px;
    color:  ${({theme}) => theme.inputPlaceholder};
   
`;
export const CardTotalText = styled.Text`
    fontSize: 14px;
    color:  ${({theme}) => theme.inputPlaceholder};
`;
export const BottomTextContainer = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    gap: 180px;
    paddingTop: 20px;
    borderTopWidth: 1px;
    borderTopColor: ${inputPlaceholder};
`;
export const BottomTextContent = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
`;
export const CardPriceText = styled.Text`
    fontSize: 14px;
    color:  ${({theme}) => theme.inputPlaceholder};
`;
// export const PromoInput = styled.CryptoAddressInput`
// `;
// ================================================= SELL CRYPTO SCREEN ==================================================================
export const CryptoContainer = styled.TouchableOpacity`
    width: 100%;
    height: 80px;
    background: ${cardsBg};
    border: ${cardsBorder};
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    marginTop: 20px;
    borderRadius: 20px;
    padding: 16px;
`;
export const ContentMarginTop = styled.View`
    marginTop: 40px;
`;
// ====left side===
export const CryptoLeftSide = styled.View`
    display: flex;
    flexDirection: column;
    justifyContent: space-between;
    gap: 6px;
`;
export const CryptoLeftSideText = styled.Text`
    fontSize: 16px;
    color: ${white};
`;
export const CryptoLefttSideImage = styled.Image`
`;
export const TemporaryImageUpload = styled.View`
    background: ${inputBg};
    height: 100px;
    width: 100px;
    borderRadius: 100px;
    textAlign: center;
    justifyContent: center;
    alignItems: center;
`;
export const TemporarypLUS = styled.Text`
    color: ${white};
    fontSize: 19px;
`;
export const  GiftcardImageUpload = styled.View`
    background: ${inputBg};
    height: 80px;
    width: 80px;
    borderRadius: 50px;
    textAlign: center;
    border: solid;
    borderColor: ${primary};
    justifyContent: center;
    alignItems: center;
`;
export const AllUploadedImages = styled.View`
    display: flex;
    flexDirection: row;
    alignItems: center;
    textAlign: center;
    marginTop: 10px;
    flexWrap: wrap;
    gap: 10px;
`;
export const SelectedImages = styled.View`
    display: flex;
    flexDirection: row;
    flexWrap: wrap;
    gap: 10px;
   
`;
export const GiftCardImage = styled.View`
    display: flex;
`;
export const DeleteImageBtn = styled.TouchableOpacity`
    position: absolute;
    right: 8px;
    bottom: 10px;
`;
export const AddedImages = styled.View`
    display: flex;
    flexDirection: row;
`;

// ================Giftcard confirmation page==================
export const ImageConfirmationConatiner = styled.View`
    display: flex;
    flexDirection: row;
    gap: 20px;
    marginTop: 20px;
`;
export const DisplaySelectedImage = styled.View`
    background: ${inputBg};
    height: 130px;
    width: 150px;
    borderRadius: 10px;
`;
export const UploadMoreImage = styled.View`
    background: ${inputBg};
    height: 130px;
    width: 150px;
    borderRadius: 10px;
    textAlign:L center;
    justifyContent: center;
    alignItems: center;
   
`;
export const AddMoreText = styled.Text`
    color: ${white};
`;

// ===right side=====

export const CryptoRightSide = styled.Image`
`;

// ================================================= GENERATE CRYPTO WALLET SCREEN ==================================================================

export const GenerateCryptoContainer = styled.View`
    width: 100%;
    height: 325px;
    background: ${cardsBg};
    marginTop: 120px;
    borderRadius: 30px;
    display: flex;
    gap: 25px;
    flexDirection: column;
    alignItems: center;
    padding: 16px;
    overflow: hidden;
`;
export const GenerateCryptoIcon = styled.Image`
    marginTop: 15px;
`;
export const GenerateCryptoTitle = styled.Text`
     fontSize: 20px;
     fontWeight: 600;
     color: ${white};
     textAlign: center;
`;
export const GenerateCryptoDetails = styled.Text`
     fontSize: 15px;
     color:  ${({theme}) => theme.inputPlaceholder};
     textAlign: center;
`;

export const ButtonStyle = styled.TouchableOpacity`
    padding: 15px;
    background: ${({theme}) => theme.primary};
    justify-content: center;
    border-radius: 15px;
    width: 100%;
    height: 60px;
`;
    // ===BTC WALLET ADRESS======
export const WalletAddressContainer = styled.View`
    background: ${cardsBg};
    marginTop: 70px;
    alignItems: center;
    width: 100%;
    height: auto;
    padding: 15px;
    borderRadius: 30px;
    flexDirection: column;
    gap: 10px;
`;
export const WalletAddressTitle = styled.Text`
    fontSize: 18px;
    color: ${white};
    fontWeight: 700;
    marginBottom: 10px;
`;
export const WalletAddressQrCode = styled.Image`
    height: 200px;
`;
export const DownloadQrCode = styled.View`
    display: flex;
    flexDirection: row;
    gap: 5px;
`;
export const DownloadQrCodeText = styled.Text`
     fontSize: 13px;
     color: ${white};
`;
export const CryptoAddressDetails = styled.Text`
     fontSize: 12px;
     color:  ${({theme}) => theme.inputPlaceholder};
     textAlign: center;
`;

// ===Input fields===
export const CryptoInputContainer = styled.View`
    display: flex;
    flexDirection: row;
    gap: 10px;
`;
export const CryptoAddressInput = styled.TextInput`
    background-color: ${inputBg};
    width: 70%;
    padding: 15px;
    padding-left: 25px;
    padding-right: 15px;
    border-radius: 15px;
    font-size: 16px;
    height: 50px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${white};
`;
export const CryptoCopyBtn = styled.TouchableOpacity`
    background: ${({theme}) => theme.primary};
    padding: 10px;
    height: 50px;
    width: 20%;
    textAlign: center;
    justifyContent: center;
    borderRadius: 12px;
`;

// ================================================= SETTINS SCREEN ==================================================================
export const SettingsContainer = styled.TouchableOpacity`
    width: 100%;
    height: 70px;
    background: ${cardsBg};
    marginTop: 10px;
    borderRadius: 8px;
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    padding: 16px;
    alignItems: center;
`;
export const TwoFaModal = styled.View`
    background: ${backgroundColor};
    padding: 26px;
    borderRadius: 15px;
`;
export const SettingsContainerInner = styled.View`
    display: flex;
    flexDirection: row;
    alignItems: center;
    gap: 14px;
`;
export const SettingsIconLeft = styled.Text`
`;
export const SettingsIconRight = styled.Text`
`;
export const SettingsTitle = styled.Text`
    fontSize: 14px;
    color: ${white};
`;
export const SettingsContent = styled.View`
    display: flex;
    flexDirection: column;
    gap: 3px;
`;
export const SettingsSubTitle = styled.Text`
    fontSize: 12px;
    color:  ${({theme}) => theme.inputPlaceholder};
`;

// ========security settings========
export const SecuritySettingsContainer = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    paddingBottom: 30px;
    marginBottom: 30px;
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    border-bottom-width: 1px;
    border-bottom-color:  ${inputBg};
`;
export const SecuritySettingsContainerInner = styled.View`
    display: flex;
    flexDirection: row;
    gap: 10px;
    alignItems: center;
`;
export const SecuritySettingsContainerText = styled.Text`
    fontSize: 14px;
    color: ${white};
`;

// =====PIN INPUT FEILD============
export const PinInputField = styled.TextInput`
    background-color: ${inputBg};
    padding: 8px;
    border-radius: 15px;
    font-size: 16px;
    height: 60px;
    width: 85px
    color:  ${({theme}) => theme.inputPlaceholder};
    textAlign: center;
`;
export const InputContainer = styled.View`
    display: flex;
    flexDirection: row;
    gap: 8px;
    alignItems: center;
    justifyContent: center;
    marginTop: 15px;
`;
// =======================Rate alert form setting================================

export const RateEntryText = styled.Text`
    fontSize: 17px;
    color:  ${({theme}) => theme.inputPlaceholder};
    marginTop: 15px;
`;
export const RateInfoText = styled.Text`
    fontSize: 14px;
    color:  ${({theme}) => theme.inputPlaceholder};
`;
export const FooterText = styled.Text`
    color:  ${({theme}) => theme.inputPlaceholder};
    fontSize: 14px;
    marginTop: 15px;
`;
export const DoubleInput = styled.View`
    display: flex;
    flexDirection: row;
    gap: 10px;
    width: 100%;
    marginTop: 18px;
`;
export const SmallLeftInput = styled.View`
    background-color: ${inputBg};
    padding: 8px;
    border-radius: 15px;
    font-size: 16px;
    height: 50px;
    display: flex;
    flexDirection: row;
    gap: 10px;
    justifyContent: center;
    alignItems: center;
    width: 30%;
    color:  ${({theme}) => theme.inputPlaceholder};
`;
export const NairaText = styled.Text`
    color: ${white};
    fontSize: 17px;
    color:  ${({theme}) => theme.inputPlaceholder};
    `;

export const RightSmallInput = styled.TextInput`
    background-color: ${inputBg};
    padding: 16px;
    border-radius: 15px;
    font-size: 16px;
    height: 50px;
    color:  ${({theme}) => theme.inputPlaceholder};
    width: 100%;
    width: 67%;
`;
// ============Rate alert list =======

export const RateAlertItem = styled.TouchableOpacity`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    background: ${cardsBg};
    height: 70px;
    borderRadius: 10px;
    alignItems: center;
    padding: 16px;
`;
export const RateItemName = styled.Text`
    fontSize: 16px;
    fontWeight: 600;
    color: ${white};
`;
export const RateItemIcon = styled.Text`
`;

// ====Alert list details=========
export const AlertItemDetails = styled.View`
    background: ${cardsBg};
    height: 40%;
    borderRadius: 15px;
    padding: 16px;
    gap: 20px;
`;
export const AlertItemRow = styled.View`
    display: flex;
    justifyContent: space-between;
    flexDirection: row;
`;
export const AlertItemDetailsLeftText = styled.Text`
    fontSize: 14px;
    color:  ${({theme}) => theme.inputPlaceholder};
`;
export const AlertItemDetailsRightText = styled.Text`
    fontSize: 14px;
    color: ${white};
`;
export const ItemDeleteBtn = styled.TouchableOpacity`
    background: transparent;
    padding: 10px;
    height: 60px;
    borderRadius:10px;
    border: 1px;
    width: 90%;
    borderColor: ${danger};
    justifyContent: center;
    alignItems: center;
`;
export const ItemButtonsContainer = styled.View`
    display:flex;
    flexDirection: row;
    gap: 15px;
    justifyContent: center;
    alignItems: center;
    marginTop: 13px;
`;
export const ItemBtnText = styled.Text`
    fontSize: 15px;
    color: ${white};
`;
export const DeleteBtnText = styled.Text`
    fontSize: 15px;
    color: ${white};
`;
export const ItemEditBtn = styled.TouchableOpacity`
    background: transparent;
    padding: 10px;
    height: 60px;
    borderRadius:10px;
    border: 1px;
    borderColor: ${({theme}) => theme.primary};
    width: 150px;
    justifyContent: center;
    alignItems: center;
`;
// =================================================TRANSACTIONS SCREEN ==================================================================
export const TransactionTopLine = styled.View`
    marginTop: 15px;
    border-top-width: 1px;
    border-top-color:   ${({theme}) => theme.inputPlaceholder};
`;
export const TransactionTab = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  gap: 10px;
  border-radius: 30px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  width: 100px
  background-color: ${(props) => (props.active ? white : cardsBg)};
`;
export const RateCalculatorTab = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  gap: 10px;
  border-radius: 30px;
  margin-right: 10px;
  align-items: center;
  justify-content: space-between;
  width: 136px;
  background-color: ${(props) => (props.active ? white : cardsBg)};
`;

export const TabsContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: ${cardsBg};
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 30px;
`;
export const TransactionContent = styled.View`
    paddingBottom: 20px;
`;
export const CheckHighrateText = styled.Text`
    color: ${({theme}) => theme.primary};
    fontSize: 16px;
    textAlign: center;
    paddingTop: 10px;
`;
// ==============transaction details page===============
export const ReceiptContaner = styled.View`
    display: flex;
    flexDirection: column;
    alignItems: center;
    width: 100%,
`;
export const ReceiptTop = styled.View`
    display: flex;
    flexDirection: column;
    gap: 5px;
    padding: 10px;
    width: 100%;
    textAlign: center;
`;
export const ReceiptHeader = styled.View`
    paddingTop: 13px;
    paddingBottom: 13px;
`;
export const ReceiptHeaderTitle = styled.Text`
    color: ${white};
    fontSize: 18px;
    fontWeight: bold;
    textAlign: center;
`;
export const ReceiptInfo = styled.View`
    background: ${cardsBg};
    height: 70px;
    display: flex;
    flexDirection: column;
    borderRadius: 10px;
    justifyContent: center;
    padding: 15px;
    width: 100%;
    gap: 10px;
`;
export const ItemInfo = styled.Text`
    color: ${white};
    fontWeight: bold;
`;
export const DateAndTime = styled.View`
    display: flex;
    flexDirection: row;
    gap: 20px;
`;
export const  DateAndTimeText = styled.Text`
    color: ${inputPlaceholder};

`;
export const ReceiptMainDetails = styled.View`
    width: 100%;
    borderRadius: 10px;
    maerginTop: 14px;
    height: 230px;
    border: 1px;
    borderColor: ${inputPlaceholder};
    marginTop: 20px;
`;
export const MainDetailsTop = styled.View`
    display: flex;
    flexDirection: row;
    gap: 10px;
    padding: 15px;
    alignItems: center;
    borderBottomWidth: 1px;
    borderBottomColor: ${inputPlaceholder};

`;
export const ProductName = styled.Text`
    color: ${white};
    fontWeight: bold;
    fontSize: 17px;
`;
export const ProductCategory = styled.Text`
    color: ${white};
    fontSize: 15px;
`;
export const ProductInfo = styled.View`
    display: flex;
    flexDirection: column;
    gap: 5px;
`;
export const TransactionDescription = styled.View`
    display: flex;
    flexDirection: column;
    gap: 5px;
    padding: 15px;

`;
export const DetailedReceipt = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
`;
export const LeftText = styled.Text`
    color: ${white};
    fontWeight: bold;
    fontSize: 12px;

`;
export const RightText = styled.Text`
    color: ${white};
    fontSize: 12px;

`;
// ====================WALLET SCREEN ==================================================================

export const UserWalletScreen = styled.View`
    background: ${darkBlue};
    flex: 1;
`;
export const UserWalletContainer = styled.View`
    padding: 16px;
    paddingTop: 40px;
    height: 50%;
    display: flex;
    flexDirection: column;
    alignItems: center;
    gap: 20px;
`;
export const WalletTitle =styled.Text`
    fontSize: 20px;
    color: ${white};
    fontWeight: 600; 
`;
export const WalletBalanceTitle =styled.Text`
    fontSize: 14px;
    color:  ${({theme}) => theme.inputPlaceholder};
`;
export const WalletBalanceContent =styled.View`
    flexDirection: row;
    gap: 6px;
`;
export const WalletBalance =styled.Text`
    fontSize: 18px;
    color: ${white};
    fontWeight: 700;
`;
export const WalletButtonContainer =styled.View`
   flexDirection: row;
   paddingTop: 20px;
   gap: 10px;
`;
export const WalletButton =styled.TouchableOpacity`
    background: ${({theme}) => theme.primary};
    textAlign: center;
    alignItems: center;
    width: 50%;
    justifyContent: center;
    height: 60px;
    borderRadius: 15px;
`;
export const WalletButtonText =styled.Text`
    color: ${white};
    textAlign: center;
`;

export const BreakDownContainer =styled.TouchableOpacity`
    display: flex;
    flexDirection: row;
`;
export const BreakDownText =styled.Text`
    fontSize: 14px;
    color: ${primary}
`;
// ==withdrawal history====
export const WithdrawalHistoryContainer = styled.View`
    height: 50%;
    width: 100%;
    padding: 16px;
    paddingTop: 25px;
    background: ${backgroundColor};
`;

export const WithdrawalText = styled.Text`
    color: ${white};
    fontSize: 18px;
`;
export const WithdrawalHistory = styled.View`
    alignItems: center;
    paddingTop: 20px;
    
`;
export const WithdrawalReceiptContainer = styled.View`
    alignItems: center;
`;
export const NoRecordReceiptContainer = styled.View`
    alignItems: center;
    justifyContent: center;
`;

export const ReceiptImage = styled.Image` 
`;
export const ReceiptText = styled.Text` 
    fontSize: 16px;
    color: ${cardsBorder};
    textAlign: center;
`;


// ======================================MY BANK SCREEN ==========================================================

export const NoBankAlert = styled.View`
    display: flex;
    marginTop: 30px;
    flexDirection: column;
    alignItems: center;
    gap: 25px;
`;
export const NoBankAlertImage = styled.Image`
`;
export const NoBankAlertText = styled.Text`
    fontSize: 15px;
    color: ${white};
`;
export const SaveAccountDetails  = styled.Text`
    fontSize: 13px;
    color: ${white};
    textAlign: center;
`;

// =========BANK CARD===========

export const BankCardContainer = styled.TouchableOpacity`
    background: ${({theme}) => theme.primary};
    height: 200px;
    borderRadius: 15px;
    padding: 16px;
    display: flex;
    flexDirection: column;
    justifyContent: space-between;
`; 
export const CardIcon = styled.View`
    height: 60px;
    width: 60px;
    borderRadius: 50px;
    background: ${backgroundColor};
    alignItems: center;
    justifyContent: center;
    padding: 6px;
`;
export const BankIcon = styled.Image`
`;
export const AccountNoContent = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
`;
export const AccountNumber = styled.Text`
    fontSize: 24px;
    color: ${white};
    fontWeight: 600;
`;
export const AcctNumberText = styled.Text`
    fontSize: 17px;
    color: ${white};
`;
export const AccountNameContent = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
`;
export const AcctName = styled.Text`
    fontSize: 15px;
    color: ${white};
`;
export const BankName = styled.Text`
    fontSize: 15px;
    color: ${white};
`;
// ======bank card details=================
export const CardDetailsContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const DetailsTextContainer = styled.View`
    display: flex;
    flex-direction: row;
    padding-bottom: 16px; 
    padding-top: 16px; 
    justify-content: space-between;
    border-bottom-width: 1px; 
    border-bottom-color: ${white};
`;

export const CardDetailsLeftText = styled.Text`
    font-size: 15px; 
    color: ${white};
`;

export const CardDetailsRightText = styled.Text`
    color: ${white};
    font-size: 15px; 
`;

export const DeleteBankInfoBtn = styled.TouchableOpacity`
    padding-top: 30px; 
`;

export const DeleteBankText = styled.Text`
    color: ${danger};
    font-size: 17px;
`;


// ======================================TUTORIALS SCREEN ==========================================================
export const TutorialsContainer = styled.View`
    background: ${cardsBg};
    height: auto;
    border: 1px;
    borderRadius: 30px;
`;
export const TutorialThumbail = styled.Image`
    height: 200px;
    width: 100%;
`;
export const TutorialTitleContainer = styled.View`
    background: ${cardsBg};
    borderRadius: 30px;
    padding: 10px;
    height: auto;
`;
export const TutorialsTitle = styled.Text`
    fontSize: 14px;
    color: ${white};
    fontWeight: 700;
`;


// ======================================PROFILE SCREEN==========================================================

export const ProfileImageContainer = styled.View`
  align-items: center;
  justifyContent: center;
  flexDirection: column; 
`;

export const UploadProfileImage = styled.TouchableOpacity`
  width: 120px;
  height: 120px;
  borderRadius: 50px;
  overflow: hidden;
  position: relative; 
`;

export const ImageContainer = styled.View`
  display: flex;
  flexDirection: column;
  position: relative; 
`;

export const CameraIconBg = styled.View`
  background: ${({theme}) => theme.primary};
  height: 40px;
  width: 40px;
  textAlign: center;
  justifyContent: center;
  alignItems: center;
  borderRadius: 50px;

 
`;
export const CameraIconContainer = styled.TouchableOpacity`
    position: absolute;
    bottom: 7px;
    right: 20px; 
    zIndex: 9;
`;
export const ProfilePicture = styled.View`
  width: 100%;
  height: 100%;
  borderRadius: 50px;
`;

export const SmallInputContainer = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
`;
export const InputFieldsContainer = styled.View`
    flexDirection: column;
    gap: 15px;
`;
export const ProfileInputSmall = styled.TextInput`
     height: 50px;
     background: ${inputBg};
     borderRadius: 15px;
     width: 49%;
     padding: 16px;
     color: ${white}
`;
export const ProfileInputField = styled.TextInput`
     height: 50px;
     background: ${inputBg};
     borderRadius: 15px;
     width: 100%;
     padding: 16px;
`;
export const ProfleInputfieldContainer = styled.View`
    display: flex;
    flexDirection: column;
    gap: 10px;
    marginTop: 10px;
`;
export const ProfileNameContainer = styled.View`
    flexDirection: column;
    gap: 6px;
    marginTop: 17px;
    alignItems: center;
    textAlign: center;
    marginBottom: 20px;
`;
export const ProfileNameText = styled.Text`
    fontSize: 14px;
    color: ${white};
`;
export const UserNameText = styled.Text`
    fontSize: 12px;
    color: ${white};
`;



// ================general settings page======================
export const GenContainer = styled.View`
    display: flex;
    flexDirection: column;
`;
export const GenContent = styled.TouchableOpacity`
    paddingBottom: 25px;
    paddingTop: 25px;
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    borderBottomWidth: 1px;
    borderBottomColor: ${white};
`;
export const GenContentLeft = styled.View`
    display: flex;
    flexDirection: column;
    gap: 5px;
`;
export const GenContenLeftTextBig = styled.Text`
    fontSize: 16px;
    color: ${white};
`;
export const GenContenLeftTextSmall = styled.Text`
    fontSize: 13px;
    color:  ${({theme}) => theme.inputPlaceholder};
`;
export const GenContentRight = styled.View`
    display: flex;
    flexDirection: row;
    gap: 10px;
`;
export const GenThemeToggle = styled.View`
    display: flex;
    flexDirection: row;
`;
export const GenTogleText = styled.Text`
    fontSize: 17px;
    color:  ${({theme}) => theme.inputPlaceholder};
`;




// ================HELP AND SUPPORT ==========================

export const SupportOption = styled.View`
    baackground: ${({theme}) => theme.cardsBg};
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    paddingBottom: 20px;
    paddingTop: 20px;
    borderBottomWidth: 1px;
    borderBottomColor: ${white};
`;
export const ContactSocialIcon = styled.View`
    height: 30px;
    width: 30px;
    background: ${inputBg};
    textAlign: center;
    alignItems: center;
    justifyContent: center;
    borderRadius: 50px;
`;
export const ContactLeft = styled.View`
    display: flex;
    flexDirection: row;
    gap: 10px;
    alignItems: center;
    justifyContent: center;
`;


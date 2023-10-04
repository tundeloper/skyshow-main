import "react-native-gesture-handler";
import React, {useState} from 'react';
import MainNavigators from "./navigation/MainNavigators";
import Provider from "./store/provider";
import 'react-native-gesture-handler';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeWrapper } from './styles/Theme';


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  return ( 


    // <Provider>
    //   <BottomSheetModalProvider>
    //     <MainNavigators />
    //   </BottomSheetModalProvider>
    // </Provider>
    // <ThemeWrapper isDarkMode={isDarkMode}>
    //   <MainNavigators />
    // </ThemeWrapper>

    <Provider>
      <ThemeWrapper isDarkMode={isDarkMode}>
      <MainNavigators />
      </ThemeWrapper>
    </Provider>
  
  );
}


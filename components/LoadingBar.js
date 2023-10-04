import React, { useState } from "react";
import { SafeAreaView, useNavigation } from "react-native-safe-area-context";

//////components--------
import {
  Colors,
  LoadingBar,
  LoadingBarConatiner,
  LoadingBarMain,
  LoadingBarText,
  BarPercentage,
  FinishSetUp,
} from "../styles/styles";

const { backgroundColor, inputPlaceholder } = Colors;

const LoadingBarScreen = () => {
  // const navigation = useNavigation(); // Get the navigation object using useNavigation()
  // const [progress, setProgress] = useState(0);

  // const handleBankAccountSetupComplete = () => {
  //   // Increase the progress by 10%
  //   setProgress((prevProgress) => prevProgress + 10);
  //   // Navigate to the Add Bank Account screen
  //   navigation.navigate("AddBankAccount");
  // };

  // const loadingBarWidth = `${progress}%`; onPress={handleBankAccountSetupComplete} {progress}% style={{ width: loadingBarWidth }}

  return (
    <LoadingBarMain>
      <LoadingBarText>
        <BarPercentage></BarPercentage>
        <FinishSetUp>Finish setup</FinishSetUp>
      </LoadingBarText>
      <LoadingBarConatiner>
        <LoadingBar />
      </LoadingBarConatiner>
    </LoadingBarMain>
  );
};

export default LoadingBarScreen;

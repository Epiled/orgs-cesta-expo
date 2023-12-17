import { SafeAreaView, StatusBar, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import mock from "./src/mocks/cesta";
import Cesta from "./src/telas/Cesta";
import AppLoading from "expo-app-loading";

export default function App() {

  let [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
};

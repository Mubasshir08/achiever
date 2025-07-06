import { View } from "react-native";
import CustomButton from "./components/CustomButton";
import "./styles/global.css";  
import { Stack } from "expo-router";
import Navbar from "./components/Navbar";

export default function RootLayout() {
  return (
    <>
    <Stack screenOptions={{ headerShown: false, statusBarStyle: "light" }}/>
    <View className="absolute bottom-[3.2rem] w-full">
      <CustomButton />
      <Navbar />
    </View>
    </>
  );
}

import EvolvrInput from "@/components/EvolvrInput";
import { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  useEffect(() => {
    console.log("Login Screen Mounted");
  }, []);
  return (
    <SafeAreaView className="px-6 flex-1 w-full bg-antiflash_white dark:bg-raisin_black justify-center items-center">
      <Text className="text-white">Login Screen</Text>
      <EvolvrInput placeholder="Email" />
      <EvolvrInput
        placeholder="Password"
        secureTextEntry={true}
        className="mb-4"
      />
    </SafeAreaView>
  );
}

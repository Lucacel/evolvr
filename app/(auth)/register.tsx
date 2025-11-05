import EvolvrButton from "@/components/EvolvrButton";
import EvolvrInput from "@/components/EvolvrInput";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen() {
  useEffect(() => {
    console.log("Register Screen Mounted");
  }, []);

  const router = useRouter();

  return (
    <SafeAreaView className="px-6 flex-1 w-full bg-antiflash_white dark:bg-raisin_black">
      <KeyboardAwareScrollView
        className="w-full flex-1"
        contentContainerClassName="items-center justify-center flex-1"
      >
        <Text className="text-antiflash_white text-2xl font-bold mb-8">
          Create your account
        </Text>
        <EvolvrInput placeholder="Email" />
        <EvolvrInput
          placeholder="Password"
          secureTextEntry={true}
          className="mb-4"
        />
        <View className="flex w-full justify-center items-center mt-10">
          <EvolvrButton
            title="Register"
            onPress={() => console.log("Register Pressed")}
            className="h-14"
          />

          <Text className="text-antiflash_white text-lg mt-4">
            {"If you already have an account, "}
            <Text
              className="text-moonstone font-bold text-lg"
              onPress={() => {
                if (router.canGoBack()) {
                  router.back();
                } else {
                  router.navigate("/(auth)");
                }
              }}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

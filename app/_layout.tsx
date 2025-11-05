import "../global.css";

import * as SplashScreen from "expo-splash-screen";
import { KeyboardProvider } from "react-native-keyboard-controller";
import "react-native-reanimated";

import { useEffect } from "react";

import { fetchCurrentUser } from "@/networking/user/usersApi";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const unstable_settings = {
  anchor: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

//create a query client instance
const queryClient = new QueryClient();

function AuthenticatedLayout() {
  const { data: currentUser, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: fetchCurrentUser,
  });

  useEffect(() => {
    console.log("isLoading:", isLoading);
    if (!isLoading) {
      SplashScreen.hide();
    }
  }, [isLoading]);

  useEffect(() => {
    console.log("Current User:", currentUser);
  }, [currentUser]);

  //TODO: add this back when app is not in dev mode
  // if (isLoading) {
  //   return (
  //     <View className=" flex-1 justify-center items-center bg-antiflash_white dark:bg-raisin_black">
  //       <Image
  //         source={require("@/assets/images/LogoIconLight.png")}
  //         style={{ width: 200, height: 200 }}
  //         contentFit="contain"
  //       />
  //     </View>
  //   );
  // }

  return (
    <Stack>
      {currentUser ? (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <KeyboardProvider>
          <AuthenticatedLayout />
        </KeyboardProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

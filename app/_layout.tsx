import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { useEffect } from "react";

import { fetchCurrentUser } from "@/networking/user/usersApi";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

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
    if (!isLoading) {
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000);
    }
  }, [isLoading]);

  useEffect(() => {
    console.log("Current User:", currentUser);
  }, [currentUser]);

  if (isLoading) {
    return null;
  }

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
  const colorScheme = useColorScheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <AuthenticatedLayout />
        <StatusBar style="auto" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

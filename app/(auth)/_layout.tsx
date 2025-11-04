import { Stack } from "expo-router";
import { useEffect } from "react";

export default function AuthLayout() {
  useEffect(() => {
    console.log("Auth Layout Mounted");
  }, []);

  return (
    <Stack>
      {/* primary screen, the login screen */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* secondary screen, the register screen */}
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="forgot" options={{ headerShown: false }} />
    </Stack>
  );
}

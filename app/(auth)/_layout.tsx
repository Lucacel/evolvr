import { Stack } from "expo-router";

export default function AuthLayout() {
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

import { Button } from "@/components/button";
import { ThemedInput } from "@/components/themed-input";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function LoginScreen() {
  return (
    <ThemedView
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedView
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThemedText style={{ alignItems: "center" }}>Login Screen</ThemedText>
      </ThemedView>
      <ThemedView style={{ flex: 2, width: "100%" }}>
        <ThemedInput placeholder="Email" style={{ marginTop: 20 }} />
        <ThemedInput
          placeholder="Password"
          secureTextEntry
          style={{ marginTop: 20 }}
        />
        <Button label="Sign In" onPress={() => {}} />
        <Button label="Sign Up" onPress={() => {}} />
      </ThemedView>
    </ThemedView>
  );
}

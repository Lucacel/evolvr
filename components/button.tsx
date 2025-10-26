import { TouchableOpacity } from "react-native";
import { ThemedText } from "./themed-text";

export type ButtonProps = {
  label?: string;
  onPress?: () => void;
};

export function Button({ label, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ThemedText>{label || "Press Me"}</ThemedText>
    </TouchableOpacity>
  );
}

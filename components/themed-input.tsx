import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet, TextInput, type TextInputProps } from "react-native";

export type ThemedInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  variant?: "default" | "outline" | "filled";
};

export function ThemedInput({
  style,
  lightColor,
  darkColor,
  variant = "default",
  ...rest
}: ThemedInputProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const backgroundColor = useThemeColor({}, "background");
  const borderColor = useThemeColor({}, "border");

  return (
    <TextInput
      style={[
        styles.base,
        { color, borderColor },
        variant === "default" ? styles.default : undefined,
        variant === "outline" ? styles.outline : undefined,
        variant === "filled" ? [styles.filled, { backgroundColor }] : undefined,
        style,
      ]}
      placeholderTextColor={color + "80"} // 50% opacity
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    width: "100%",
    height: 48,
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 8,
  },
  default: {
    borderWidth: 0,
  },
  outline: {
    borderWidth: 1,
  },
  filled: {
    borderWidth: 0,
    opacity: 0.7,
  },
});

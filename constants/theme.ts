/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const raisin_black = "#272727";
const mustard = "#FED766";
const moonstone = "#009FB7";
const dim_gray = "#696773";
const antiflash_white = "#EFF1F3";

export const Colors = {
  light: {
    text: raisin_black,
    background: antiflash_white,
    tint: moonstone,
    icon: dim_gray,
    tabIconDefault: dim_gray,
    tabIconSelected: moonstone,
    mustard,
    moonstone,
  },
  dark: {
    text: antiflash_white,
    background: raisin_black,
    tint: moonstone,
    icon: dim_gray,
    tabIconDefault: dim_gray,
    tabIconSelected: moonstone,
    mustard,
    moonstone,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        raisin_black: "#272727",
        mustard: "#FED766",
        moonstone: "#009FB7",
        dim_gray: "#696773",
        antiflash_white: "#EFF1F3",
      },
    },
    plugins: [
      ({ addBase }) => {
        addBase({
          ":root": {
            "--color-raisin-black": "#272727",
            "--color-mustard": "#FED766",
            "--color-moonstone": "#009FB7",
            "--color-dim-gray": "#696773",
            "--color-antiflash-white": "#EFF1F3",
          },
          ".dark": {
            "--color-background": "var(--color-raisin-black)",
            "--color-text": "var(--color-antiflash-white)",
          },
          ".light": {
            "--color-background": "var(--color-antiflash-white)",
            "--color-text": "var(--color-raisin-black)",
          },
        });
      },
    ],
  },
};

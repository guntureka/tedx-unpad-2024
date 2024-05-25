import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', "sans-serif"],
      },
      colors: {
        red: {
          dark: "#721E12",
          normal: "#C93420",
          light: "#EA887B",
        },
        black: {
          abs: "#000000",
          bg: "#1F1F1F",
          txt: "#232321",
        },
        grey: {
          dark: "#333333",
          light: "#999999",
        },
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

export default config;
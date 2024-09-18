import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3879E9",
        "secondary": "#1D2128",
        "tetiary": "#FAFAFA",
        "black": "#333333",
        "dark": "#1E1E21",
        "brown": "#737373",
        "gray": "#D9D9D9",
        "slate": "#FAFAFA",
        "red": "#FF3939",
      },
      boxShadow: {
        "input-active" : "0px 0px 12px 0px #633CFF40"
      },
      animation: {
        "spin-slow": "spin 5s linear infinite"
      }
    },
  },
  plugins: [],
};

export default config;
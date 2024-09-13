import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#ffC223",
        // black: "#121212",
        black: "#14181e",
        rightGray: "#d9d9d9",
      },
    },
  },
  plugins: [],
};
export default config;

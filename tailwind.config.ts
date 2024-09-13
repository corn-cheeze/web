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
        red: "#e30000",
        rightGray: "#d9d9d9",
        black: "#14181e",
        // black: "#121212",
      },
      dropShadow: {
        xl: "5px 5px 10px rgba(217, 217, 217, 0.8)",
      },
      borderRadius: {
        sm: "0.75rem",
        lg: "2rem",
      },
    },
  },
  plugins: [],
};
export default config;

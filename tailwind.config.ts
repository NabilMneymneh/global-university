import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#4C4C4D",
        primary: {
          DEFAULT: "#F47920",
          dark: "#FCB64D",
        },
        secondary: {
          DEFAULT: "#D3D3D3",
          dark: "#4C4C4D",
        },
        accent: "#FCB64D",
        muted: "#D3D3D3",
        border: "#D3D3D3",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;


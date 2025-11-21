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
        foreground: "#0F172A", // Deep navy for better readability
        primary: {
          DEFAULT: "#F97316", // Vibrant Orange
          foreground: "#FFFFFF",
          dark: "#EA580C",
        },
        secondary: {
          DEFAULT: "#0F172A", // Deep Navy
          foreground: "#FFFFFF",
          light: "#1E293B",
        },
        accent: {
          DEFAULT: "#FDBA74", // Light Orange
          foreground: "#0F172A",
        },
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#64748B",
        },
        border: "#E2E8F0",
        surface: {
          DEFAULT: "#F8FAFC",
          foreground: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;


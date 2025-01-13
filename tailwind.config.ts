import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        secondary: "var(--secondary)",
        bg1: "var(--background1)",
        bg2: "var(--background2)",
        border: "var(--border)",
        cardBg: "var(--cardBackground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

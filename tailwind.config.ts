import type { Config } from "tailwindcss";
import flyonui from "flyonui";
import flyonuiPlugin from "flyonui/plugin";

export default {
  content: [
    "./node_modules/flyonui/dist/js/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/node-waves/**/*.js",
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
  flyonui: {
    themes: [
      {
        opera: {
          primary: "#c9ac8c",
          "primary-content": "#181616",
          secondary: "#181616",
          "secondary-content": "#c9ac8c",
          accent: "#9b59b6",
          "accent-content": "#ebddf1",
          neutral: "#95a5a6",
          "neutral-content": "#080a0a",
        },
      },
      "gourmet",
    ],
    vendors: true,
  },
  plugins: [flyonui, flyonuiPlugin], // Only if you want to use FlyonUI JS component plugins ], // Only if you want to use FlyonUI JS component plugins ],
} satisfies Config;

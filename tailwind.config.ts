import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: "#8ed9cc",
        "mint-deep": "#2b8d83",
        coral: "#f07a67",
        ink: "#263435",
        muted: "#667274",
        paper: "#fffaf4",
        cloud: "#f4fbf9",
        line: "#d9e9e4",
      },
      boxShadow: {
        soft: "0 18px 46px rgba(38, 52, 53, .14)",
        panel: "0 14px 38px rgba(38, 52, 53, .08)",
      },
      fontFamily: {
        sans: [
          "Noto Sans TC",
          "Microsoft JhengHei",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;

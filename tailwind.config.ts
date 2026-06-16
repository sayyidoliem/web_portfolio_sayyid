import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        action: { DEFAULT: "#0066cc", focus: "#0071e3", dark: "#2997ff" },
        apple: {
          ink: "#1d1d1f",
          muted: "#7a7a7a",
          darkMuted: "#cccccc",
          hairline: "#e0e0e0",
          parchment: "#f5f5f7",
          pearl: "#fafafc",
          tile: "#272729",
          tile2: "#2a2a2c",
          tile3: "#252527",
          black: "#000000",
        },
      },
      boxShadow: { product: "rgba(0,0,0,.22) 3px 5px 30px 0px" },
      maxWidth: { apple: "980px", gallery: "1440px" },
    },
  },
  plugins: [],
};
export default config;

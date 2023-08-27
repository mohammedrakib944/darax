import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        darax: {
          primary: "#ff6801",
          secondary: "#faca51",
          accent: "#424242",
          neutral: "#e7e5e4",
          "base-100": "#f1f1f1",
          info: "#1d4ed8",
          success: "#16a34a",
          warning: "#ef4444",
          error: "#ff0000",
        },
      },
    ],
  },
};
export default config;

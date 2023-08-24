/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx}", "./src/**/*.{js,ts,jsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        darazPro: {
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

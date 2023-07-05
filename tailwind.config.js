/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "media" will enable OS to automatically modfy the webapp's theme
  darkMode: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 1px 1px 0px",
      },
      colors: {
        transparent: "transparent",
        "sg-light": {
          // all light theme colors here
          background: "#f7f7f7",
          primary: {
            100: "#01DCD4",
            300: "#00BBB4",
          },
          secondary: {
            100: "#F5A623",
            300: "#E0AA3E",
            dark: "#1B383D",
          },
          grey: {
            100: "#FFFFFF",
            300: "#999999",
            500: "#666666",
            700: "#414A4F",
            900: "#333333",
          },
          status: {
            success: "#29C13B",
            failure: "#D71917",
          },
          "text-emoji": {
            DEFAULT: "#1C5ED9",
          },
          "cta-gradiant": {
            from: "#00998E",
            to: "#00BBB4",
          },
          "alert-bg-gradiant": {
            from: "#FFB04FCC",
            to: "#FF0000CC",
          },
          "background-gradiant": {
            from: "#105050",
            to: "#047C7B",
          },
          "savings-zone-gradiant": {
            from: "#A2C5E5",
            to: "#BEFFFD",
          },
        },
        "sg-dark": {
          // all dark tones here
          background: "#1B383D",
          primary: {
            DEFAULT: "#C9A775",
            100: "#FFE0BA",
            300: "#F5A623",
            500: "#986924",
          },
          secondary: {
            100: "#01DCD4",
            300: "#00BBB4",
            dark: "#1B383D",
          },
          grey: {
            100: "#FFFFFF",
            300: "#F6F6F6",
            500: "#999999",
            700: "#666666",
            900: "#333333",
          },
          status: {
            success: "#29C13B",
            failure: "#FF0000",
          },
          "text-emoji": {
            DEFAULT: "#1C5ED9",
          },
          "cta-gradiant": {
            from: "#986924",
            to: "#C9A775",
          },
          "alert-bg-gradiant": {
            from: "#FFB04FCC",
            to: "#FF0000CC",
          },
          "background-gradiant": {
            from: "#105050",
            to: "#047C7B",
          },
          "savings-zone-gradiant": {
            from: "#A2C5E5",
            to: "#BEFFFD",
          },
        },
      },
    },
  },
  plugins: [],
};

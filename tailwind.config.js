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

      colors: {
        transparent: "transparent",
        chalk: {
          // all light theme colors here
          background: "#f7f7f7",
          white: "#FFFFFF",
          primary: "#009B77",
          secondary: "red",
          card: {
            background: "white",
            border: "white",
            shadow: "rgba(0, 0, 0, 0.25)",
            heading3: "#414A4F",
            heading5: "#333333"
          }
        },
        charcoal: {
          // all dark tones here
          background: "#1B383D",
          white: "#FFFFFF",
          primary: "black",
          secondary: "blue",
          card: {
            background: "#363C3D",
            border: "#C9A775",
            shadow: "transparent",
            heading3: "#C9A775",
            heading5: "#FFFFFF"
          }
        },
      },
    },
  },
  plugins: [],
};

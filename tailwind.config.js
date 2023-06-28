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
          // all light theme
          white: "#FFFFFF",
          primary: "#009B77",
          secondary: "red",
        },
        charcoal: {
          // all dark tones
          white: "#FFFFFF",
          primary: "black",
          secondary: "blue",
        },
      },
    },
  },
  plugins: [],
};

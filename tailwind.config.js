/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00C2FF",
        secondary: "#0A0F1F",
        accent: "#4DFFDF",
        dark: "#02040A",
      },
    },
  },
  plugins: [],
};



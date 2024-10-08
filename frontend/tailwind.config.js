/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    colors: {
      main: {
        100: "#191d28",
        200: "#161922",
        300: "#171b26",
      },
      black: "#333",
      white: "#fff",
      gray: "#777",
      red: "#DC2F02",
      text: {
        100: "#c8cad0",
        200: "#f5ce69",
        300: "#1291f0",
      },
    },
  },

  extend: {},
  plugins: [],
};

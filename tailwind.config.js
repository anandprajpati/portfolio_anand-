/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#0066ff",
        secondary: "#00d9ff",
        dark: "#0f0f0f",
      },
    },
  },
  plugins: [],
};
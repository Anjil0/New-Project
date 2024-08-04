/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // tailwind.config.js
  theme: {
    extend: {
      keyframes: {
        underlineExpand: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        underlineExpand: "underlineExpand 0.3s ease forwards",
      },
      colors: {
        "indigo-600": "#4f46e5",
      },
    },
  },
  plugins: [],
};

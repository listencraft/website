/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        btnColor1: "#F9A027",
        btnColor2: "#E86805",
        btnColorHover: "#1F1209",
        bgHeader: "#AE4E01",
        title: "#FF9B4A",
      },
    },
  },
  plugins: [],
};

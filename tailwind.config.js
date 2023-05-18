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
        ground: "#482603",
        features: "#6E3001",
        questions: "#EF8E21",
        questions_bg_1: "#FBE2BA",
        questions_bg_2: "#221202;",
        light_brown_bg: "#623506",
      },
    },
  },
  plugins: [],
};

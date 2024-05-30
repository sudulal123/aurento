/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-teal": {
          100: "#F5F8FF",
          DEFAULT: "#008080",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          100: "rgba(59,60,152,0.02)",
          DEFAULT: "rgba(59,60,152,0.03)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/porsche911-bg.png')",
      },
    },
    keyframes: {
      slidein: {
        from: {
          opacity: "0",
          transform: "translateY(-10px)",
        },
        to: {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
    },
    animation: {
      slidein300: "slidein 1s ease 300ms",
      slidein500: "slidein 1s ease 500ms",
      slidein700: "slidein 1s ease 700ms",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('./src/assets/illustration-sign-up-mobile.svg')",
      },
      screens: {
        sm: '480px',
        md: '860px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        Tomato: "#FF6257",
        "Dark-Slate-Grey": "#937B92",
        "Charcoal-Grey": "#36384E",
        Grey: "#9294A0",
        white: "#FFFFFF",
        starting: "hsla(13, 100%, 62%, 1)",
        ending: "hsla(347, 100%, 66%, 1)",
        bgfile: "#FFE8E6",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

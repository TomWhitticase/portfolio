/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "hsl(0, 0%, 100%)",
        green: {
          light: "hsl(108, 44%, 43%)",
          dark: "	hsl(120, 40%, 33%)",
        },
        orange: "	hsl(34, 97%, 46%)",
        gray: {
          veryLight: "hsl(0, 0%, 80%)",
          light: "hsl(0, 0%, 50%)",
          medium: "hsl(0, 0%, 40%)",
          dark: "hsl(0, 0%, 30%)",
          veryDark: "hsl(0, 0%, 20%)",
        },
      },
      fontFamily: {
        title: ["Poppins", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant(
        "mobile-only",
        "@media screen and (max-width: theme('screens.md'))"
      );
      addVariant(
        "desktop-only",
        "@media screen and (min-width: theme('screens.md'))"
      );
    },
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      "gray-100": "#E1E1E6",
      "gray-200": "#C4C4CC",
      "gray-400": "#7C7C8A",
      "gray-800": "#202024",
      "gray-900": "#121214",

      "cyan-300": "#9BE1FB",
      "cyan-500": "#81D8F7",
    },
  },
  plugins: [],
};

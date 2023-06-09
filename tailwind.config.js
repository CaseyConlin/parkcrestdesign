module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pd-blue": "rgb(0, 145, 203, 1)",
        "pd-blue-dark": "rgb(0,116,162, 1)",
        "pd-green": "rgb(161, 255, 161, 1)",
        "pd-green-dark": "rgb(112,255,112, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss/nesting")],
};

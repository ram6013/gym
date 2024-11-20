module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "rgb(19, 41, 61)",
        "custom-blue2": "rgb(42, 98, 143)",
        "custom-green": "rgb(128, 237, 153)",
        'custom-darkgreen': 'rgb(27, 67, 50)'
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

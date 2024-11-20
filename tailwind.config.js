// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Para detectar todos los archivos de React
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "rgb(19, 41, 61)",
        "custom-gray": "rgb(42, 98, 143)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

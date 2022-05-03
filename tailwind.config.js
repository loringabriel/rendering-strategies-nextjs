const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  images: {
    domains: ["tailwindui.com"],
    formats: ["image/avif", "image/webp"],
  },
};

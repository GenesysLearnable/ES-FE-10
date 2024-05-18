/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-bg": "url('/public/images/bg-mobile.png')",
        "desktop-bg": "url('/public/images/mobile-bg.png')",
      },
    },
  },
  plugins: [],
};

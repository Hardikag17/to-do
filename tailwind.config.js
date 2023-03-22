/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Raleway", "sans-serif"],
      },
      fontSize: {
        web_normal: ["16px", "25px"],
        web_large: ["30px", "35px"],
        web_title: ["185px", "110px"],
        mobile_normal: ["14px", "20px"],
        mobile_large: ["24px", "25px"],
        mobile_title: ["80px", "50px"],
      },
    },
  },
  plugins: [],
};

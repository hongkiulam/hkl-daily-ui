const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      },
      height: {
        "custom-screen": "calc(100vh - 96px)",
        "1/2": "50%",
        "3/4": "75%",
      },
    },
  },
  variants: {},
  plugins: [],
};

// tailwind.config.js
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
daisyui: {
  themes: [
    {
      light: {
        ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        "base-100": "#ffffff", // background for dropdowns, cards
        "base-200": "#f2f2f2",
        "base-content": "#1f2937", // dark text
      },
    },
  ],
},

}

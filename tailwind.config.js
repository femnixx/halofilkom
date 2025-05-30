module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'score-gradient': 'linear-gradient(to right, #AB9081, #937977, #7C616C, #AB5B4B)',
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "base-100": "#ffffff",
          "base-200": "#f2f2f2",
          "base-content": "#1f2937",
        },
      },
    ],
  },
}

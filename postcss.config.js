module.exports = {
  plugins: [
    require("autoprefixer"),
    require("precss"),
    require("css-mqpacker"),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
};

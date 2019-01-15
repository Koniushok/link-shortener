const webpack = require("webpack");

module.exports = () => ({
  devServer: {
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});

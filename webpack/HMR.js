const webpack = require("webpack");

module.exports = function() {
  return {
    devServer: {
      hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  };
};

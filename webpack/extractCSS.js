const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssPlugin = new MiniCssExtractPlugin({
  filename: "style/[name].css",
  chunkFilename: "[id].css"
});

module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "../"
              }
            },
            "css-loader"
          ]
        }
      ]
    },
    plugins: [cssPlugin]
  };
};

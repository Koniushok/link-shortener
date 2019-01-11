const FlowWebpackPlugin = require("flow-webpack-plugin");

module.exports = () => ({
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["eslint-loader", "stylelint-custom-processor-loader"]
      }
    ]
  },
  plugins: [new FlowWebpackPlugin()],
  devtool: "source-map"
});

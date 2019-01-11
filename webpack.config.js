const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const merge = require("webpack-merge");
const development = require("./webpack/development.js");
const mailRules = require("./webpack/mainRules.js");
const imageRules = require("./webpack/imageRules.js");

const PATH = {
  sourc: path.resolve(__dirname, "src"),
  build: path.resolve(__dirname, "build")
};

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "index.html",
  favicon: "./public/favicon.ico"
});
const copyPlugin = new CopyWebpackPlugin([
  {
    from: path.join(PATH.sourc, "static/normalize.css"),
    to: path.join(PATH.build, "static/style/normalize.css")
  }
]);
const common = merge([
  {
    entry: path.join(PATH.sourc, "/index.js"),
    output: { path: PATH.build, filename: "[name].js" },
    plugins: [htmlPlugin, copyPlugin],
    resolve: {
      extensions: [".js", ".json", ".jsx"]
    }
  },
  mailRules(),
  imageRules()
]);

module.exports = (env, argv) => {
  let config = {};
  if (argv.mode === "development") {
    config = merge([common, development()]);
  }

  if (argv.mode === "production") {
    config = merge([common]);
  }
  return config;
};

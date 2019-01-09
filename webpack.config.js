const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const merge = require("webpack-merge");

const css = require("./webpack/css.js");
const extractCSS = require("./webpack/extractCSS.js");
const devserver = require("./webpack/devserver.js");
const mailRules = require("./webpack/mainRules.js");
const image = require("./webpack/image.js");
const PATH = {
  sourc: path.resolve(__dirname, "src"),
  build: path.resolve(__dirname, "build")
};

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "index.html",
  favicon: "./public/favicon.ico"
});

const common = merge([
  {
    entry: PATH.sourc + "/index.js",
    output: { path: PATH.build, filename: "[name].js" },
    plugins: [htmlPlugin],
    resolve: {
      extensions: [".js", ".json", ".jsx"]
    }
  },
  mailRules(),
  image()
]);

module.exports = (env, argv) => {
  let config = {};
  if (argv.mode === "development") {
    console.log("development");
    config = merge([common, css(), devserver()]);
  }

  if (argv.mode === "production") {
    console.log("production");
    config = merge([common, extractCSS()]);
  }
  //console.log(config);
  return config;
};

const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const merge = require("webpack-merge");

const css = require("./webpack/css.js");
const extractCSS = require("./webpack/extractCSS.js");
const devserver = require("./webpack/devserver.js");
const mailRules = require("./webpack/mainRules.js");
const PATH = {
  sourc: path.resolve(__dirname, "src"),
  build: path.resolve(__dirname, "build")
};

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "index.html"
});

const common = merge([
  {
    module: {
      rules: [
        {
          test: /\.(jpg|png|svg)$/,
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]"
          }
        }
      ]
    },
    entry: PATH.sourc + "/index.js",
    output: { path: PATH.build, filename: "[name].js" },
    plugins: [htmlPlugin],
    resolve: {
      extensions: [".js", ".json", ".jsx"]
    }
  },
  mailRules()
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

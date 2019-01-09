const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATH = {
  sourc: path.resolve(__dirname, "src"),
  build: path.resolve(__dirname, "build")
};

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

const cssPlugin = new MiniCssExtractPlugin({
  filename: "style/[name].css",
  chunkFilename: "[id].css"
});
const css = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
const extractCSS = {
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

const common = {
  entry: PATH.sourc + "/index.js",
  output: { path: PATH.build, filename: "[name].js" },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
    port: 3000
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    console.log("development");
    return merge([common, css]);
  }

  if (argv.mode === "production") {
    console.log("production");
    return merge([common, extractCSS]);
  }
};

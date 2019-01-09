module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
  };
};

import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./app.jsx";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./app.jsx", function() {
    console.log("Accepting the updated printMe module!");
  });
}

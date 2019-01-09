import React, { Component } from "react";
import url from "./svg.svg";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>App</p>
        <img src={url} alt="not svg" />
      </div>
    );
  }
}

export default App;

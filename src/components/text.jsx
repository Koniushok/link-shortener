import React, { Component } from "react";
import ReactDOM from "react-dom";

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <p>Main</p>;
  }
}
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<Text />, wrapper) : false;

export default Text;

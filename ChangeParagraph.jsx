import React, { Component } from "react";

export default class ChangeParagraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "CHAO BAN",
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ content: "CÙNG CỐ GẮNG NHÉ !!!" });
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <p>{this.state.content}</p>
        <button onClick={this.updateState}>Click me!</button>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./calculator.css";

class Button extends Component {
  handleInput = () => {
    this.props.handleInput(this.props.item);
  };
  render() {
    return (
      <div className="Button" onClick={this.handleInput}>
        {this.props.item}
      </div>
    );
  }
}
export default Button;

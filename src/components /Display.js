import React, { Component } from "react";
import Buttons from "./Buttons";
import "./calculator.css";

class Display extends Component {
  constructor() {
    super();
    this.state = {
      input1: "",
      operator: "",
      input2: "",
      result: ""
    };
    this.textInput = React.createRef();
  }

  componentDidMount(){
    this.textInput.current.focus();
  }
  
  handleInput = async value => {
    if (value === "=") {
      await this.calculateResult(
        this.state.input1,
        this.state.operator,
        this.state.input2
      );
    } else {
      if (this.state.operator.length) {
        const newInput = this.state.input2 + value;
        await this.setState({
          input2: newInput
        });
      }
      if (typeof value === "string" && !this.state.operator.length) {
        await this.setState({
          operator: value
        });
      }
      if (!this.state.operator.length) {
        const newInput = this.state.input1 + value;
        await this.setState({
          input1: newInput
        });
      }
    }
  };
  calculateResult = async (input1, operator, input2) => {
    const in1 = parseInt(input1, 10);
    const in2 = parseInt(input2, 10);
    let result;
    switch (operator) {
      case "*":
        result = in1 * in2;
        break;
      case "+":
        result = in1 + in2;
        break;
      case "-":
        result = in1 - in2;
        break;
      case "/":
        result = in1 / in2;
        break;
      default:
        result = 0;
    }
    await this.setState({
      result,
      input1:"",
      input2:"",
      operator:""
    });
    setTimeout(() => {
      this.setState({result:""});
  }, 3000);
  };
  render() {
    const displayValue =
      this.state.input1 +
      this.state.operator +
      this.state.input2 +
      this.state.result;
    return (
      <div>
        <form onSubmit={this.calculateResult}>
          <input
            ref = {this.textInput}
            className="Display"
            type="text"
            onChange={this.handleInput}
            value={displayValue}
          />
        </form>
        <Buttons handleInput={this.handleInput} />
      </div>
    );
  }
}

export default Display;

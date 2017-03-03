import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {result: 0, num1: "", num2: ""};
    this.operator = this.operator.bind(this);
  }


  updateNum(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  operator(event){
    event.preventDefault();
    let operand = event.currentTarget.className;

    if(operand === "add"){
      this.setState({
        ["result"]: parseInt(this.state["num1"]) + parseInt(this.state["num2"])
      });
    }else if(operand === "subtract"){
      this.setState({
        ["result"]: parseInt(this.state["num1"]) - parseInt(this.state["num2"])
      });
    }
    else if(operand === "multiply"){
      this.setState({
        ["result"]: parseInt(this.state["num1"]) * parseInt(this.state["num2"])
      });
    }else if(operand === "divide"){
      this.setState({
        ["result"]: parseInt(this.state["num1"]) / parseInt(this.state["num2"])
      });
    }
  }



  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>

      <input className="num1" onChange={this.updateNum("num1")}></input>
      <input className="num2" onChange={this.updateNum("num2")}></input>
      <br></br>
      <button className="add"onClick={this.operator}>+</button>
      <button className="subtract" onClick={this.operator}>-</button>
      <button className="multiply" onClick={this.operator}>*</button>
      <button className="divide" onClick={this.operator}>/</button>
      </div>
    );
  }
}

export default Calculator;

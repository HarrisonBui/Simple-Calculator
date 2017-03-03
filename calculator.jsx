import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {result: 0, num1: "", num2: ""};
    this.operator = this.operator.bind(this);
    this.clear = this.clear.bind(this);
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


  clear(event){
    event.preventDefault();
    this.setState({
      ["result"]: 0, ["num1"]:  "", ["num2"]: ""
    });

    document.getElementById("nums").value = "";
    document.getElementById("nums2").value = "";
  }


  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>

      <input id="nums" className="num1" onChange={this.updateNum("num1")}></input>
      <input id="nums2" className="num2" onChange={this.updateNum("num2")}></input>
      <button className="clear" onClick={this.clear}>Clear!</button>
      <br/>
      <button className="add" onClick={this.operator}>+</button>
      <button className="subtract" onClick={this.operator}>-</button>
      <button className="multiply" onClick={this.operator}>*</button>
      <button className="divide" onClick={this.operator}>/</button>
      </div>
    );
  }
}

export default Calculator;

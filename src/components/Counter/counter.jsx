import { Component } from "react";

class Counter extends Component {
  state = {
    value: 0,
  };

  HandleIncrement = () => {
    console.log("Click!");
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  HandleDecrement = () => {
    console.log("Click!");
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <>
        <p>{this.state.value}</p>
        <input type="button" value="Increment" onClick={this.HandleIncrement} />
        <input type="button" value="Decrement" onClick={this.HandleDecrement} />
      </>
    );
  }
}

export default Counter;

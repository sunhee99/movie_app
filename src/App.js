import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  }; //변경할 데이터를 state에 넣는다.

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  }; //변경할 데이터를 state에서 직접적으로 변경하지 말아야한다.

  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("I just update");
  }
  componentWillMount() {
    console.log("Goodbye, cruel world");
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;

import React, { Component, PureComponent } from "react";

export default class PureComponentPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      // obj: {
      //   num: 0,
      // },
    };
  }
  setCounter = () => {
    console.log("setCounter");
    this.setState({
      counter: 100,
      // obj: { num: 200 },
    });
  };
  render() {
    console.log("render");
    const { counter } = this.state;
    return (
      <div>
        <h1>PureComponentPage</h1>
        <div onClick={this.setCounter}>{counter}</div>
      </div>
    );
  }
}

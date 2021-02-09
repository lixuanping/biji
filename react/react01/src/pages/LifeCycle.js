import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    console.log("constructor", this.state);
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", state);
    //返回null 不对state做改变
    return state.counter !== 5 ? null : { counter: 0 };
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevState);
    return null;
  }
  /* UNSAFE_componentWillMount() {
    console.log("componentWillMount", this.state);
  } */
  componentDidMount() {
    console.log("componentDidMount", this.state);
  }
  /*  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate", this.state);
  } */
  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextState);
    return nextState.counter !== 3; //false; //true;
  }
  setCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    console.log("render", this.state);
    const { counter } = this.state;
    return (
      <div>
        <h1>LifeCycle</h1>
        <p onClick={this.setCounter}> {counter}</p>
        {counter != 2 && <Foo counter={counter} />}
      </div>
    );
  }
}

class Foo extends Component {
  //只有在挂载的组件接收到的props变化的时候 才会执行
  /* UNSAFE_componentWillReceiveProps(props, state) {
    console.log("Foo componentWillReceiveProps", props);
  } */
  componentWillUnmount() {
    console.log("Foo componentWillUnmount");
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>Foo</h1>
        <p>{counter}</p>
      </div>
    );
  }
}

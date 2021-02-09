import React, { Component } from "react";

//clock
export default class ClassComponent extends Component {
  /* state = {
    date: new Date(),
  }; */
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 0,
    };
  }
  componentDidMount() {
    //组件挂载完之后执行
    console.log("componentDidMount");
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
    document.getElementById("test").addEventListener("click", () => {
      this.setState({
        counter: this.state.counter + 1,
      });
      console.log("satt", this.state.counter);
    });
  }
  componentWillUnmount() {
    //组件卸载之前完成
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  setCounter = () => {
    // this.state.counter = this.state.counter + 1
    /* this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => {
        console.log("satt", this.state.counter);
      },
    ); */
    /* this.setState({
      counter: this.state.counter + 1,
    });
    this.setState({
      counter: this.state.counter + 2,
    }); */
    /* this.setState(nextState => {
      return {
        counter: nextState.counter + 1,
      };
    });
    this.setState(nextState => {
      return {
        counter: nextState.counter + 2,
      };
    });
    console.log("satt", this.state.counter); */
    //实现同步
    /* setTimeout(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
      console.log("satt", this.state.counter);
    }, 0); */
  };

  render() {
    // console.log("render");
    const name = "小明";
    const { date, counter } = this.state;
    return (
      <div>
        <h1>ClassComponent</h1>
        <p>{name}</p>
        <p id="test" onClick={this.setCounter}>
          counter: {counter}
        </p>
        <div>{date.toLocaleTimeString()}</div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class EventHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    // this.submit = this.submit.bind(this);
  }
  submit = () => {
    // submit() {
    console.log("submit", this.state);
    this.props.tellme("我是时间处理");
    // console.log("submit", this.refs["input"].value);
  };
  setChange = event => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    const { name } = this.state;
    const { store } = this.props;
    console.log("store", store);
    return (
      <div>
        <h1>EventHandle</h1>
        <input value={name} onChange={this.setChange} ref="input" />
        <button onClick={this.submit}>login</button>
      </div>
    );
  }
}

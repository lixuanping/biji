import React, { Component } from "react";
import { connect } from "react-redux";
import { add, minus, asyAdd } from "../action/reactReduxPage";

class ReactReduxPage extends Component {
  render() {
    console.log("omg", this.props);
    const { counter, dispatch, add, minus, asyAdd } = this.props;
    return (
      <div>
        <h1>ReactReduxPage</h1>
        <p>{counter}</p>
        {/* <button onClick={() => dispatch({ type: "add" })}>add</button> */}
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={asyAdd}>asyAdd</button>
      </div>
    );
  }
}

export default connect(
  //mapStateToProps
  state => ({ counter: state.counter }),
  //mapDispacthToProps
  { add, minus, asyAdd },
)(ReactReduxPage);

{
  /* <Cmp {..props}  add={add} */
}

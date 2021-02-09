import React, { Component } from "react";

// function Child(props) {
//   return <div className="border">CHild</div>;
// }

// const foo = Cmp => {
//   return props => {
//     return <Cmp {...props} />;
//   };
// };

const foo = Cmp => props => {
  return (
    <div className="border">
      <Cmp {...props} />
    </div>
  );
};

@foo
@foo
class Child extends Component {
  render() {
    return <div className="border">CHild</div>;
  }
}

export default class HocPage extends Component {
  render() {
    // const Foo = foo(foo(Child));
    return (
      <div>
        <h1>HocPage</h1>
        {/* <Foo /> */}
        <Child />
      </div>
    );
  }
}

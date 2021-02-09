import React from "react";
import ReduxPage from "./pages/ReduxPage";
import ReactReduxPage from "./pages/ReactReduxPage";
import MyReduxPage from "./pages/MyReduxPage";
import MyReactReduxPage from "./pages/MyReactReduxPage";

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

function f1() {
  console.log("f1");
}
function f2() {
  console.log("f2");
}
function f3() {
  console.log("f3");
}

// f1();
// f2();
// f3();

//f3(f2(f1()));
compose()();
function compose(...funcs) {
  const len = funcs.length;
  if (len === 0) {
    return arg => arg;
  } else if (len === 1) {
    return funcs[0];
  } else {
    return funcs.reduce((a, b) => (...args) => b(a(...args)));
  }
}

function App() {
  return (
    <div className="App">
      {/* <ReduxPage /> */}
      {/* <ReactReduxPage /> */}
      {/* <MyReduxPage /> */}
      <MyReactReduxPage />
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store/MyReactReduxStore";
import { Provider } from "./kReactRedux";

// import store from "./store/ReduxStore";
// import store from "./store/ReactReduxStore";
// import { Provider } from "react-redux";

// const render = () => {
//   ReactDOM.render(<App />, document.getElementById("root"));
// };

// render();

// store.subscribe(render);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

// ReactDOM.render(<App />, document.getElementById("root"));

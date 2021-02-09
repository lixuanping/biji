import React from "react";
import HomePage from "./pages/HomePage";
import { Provider, Consumer, MyProvider } from "./AppContext";
import HocPage from "./pages/HocPage";
import UserPage from "./pages/UserPage";
import HooksPage from "./pages/HooksPage";
import UseReducerPage from "./pages/UseReducerPage";
import UseContextPage from "./pages/UseContextPage";
// const Context = React.createContext();
// const Provider = Context.Provider;
// const Consumer = Context.Consumer;

function Child(props) {
  return (
    <div>
      Child
      <p>{props.user.name}</p>
    </div>
  );
}

const store = {
  user: {
    name: "哪吒",
  },
};

function App() {
  return (
    <div className="App">
      {/* <Child {...store} /> */}
      {/* <MyProvider value={store}> */}
      <Provider value={store}>
        {/* <Consumer>{ctx => <Child {...ctx} />}</Consumer> */}
        {/* <Consumer>{ctx => <HomePage {...ctx} />}</Consumer> */}
        {/* <HomePage /> */}
        {/* <HocPage /> */}
        {/* <UserPage /> */}
        {/* <HooksPage /> */}
        {/* <UseReducerPage /> */}
        <UseContextPage />
      </Provider>
      {/* </MyProvider> */}
    </div>
  );
}

export default App;

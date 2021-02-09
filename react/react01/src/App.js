import React from "react";
// import ClassComponent from "./pages/ClassComponent";
import FuncComponent from "./pages/FuncComponent";
import EventHandle from "./pages/EventHandle";
import LifeCycle from "./pages/LifeCycle";

const store = {
  user: "tom",
};

function tellme(msg) {
  console.log("msg", msg);
}

function App() {
  return (
    <div className="App">
      {/* <ClassComponent /> */}
      {/* <FuncComponent /> */}
      {/* <EventHandle store={store} tellme={tellme} /> */}
      <LifeCycle />
    </div>
  );
}

export default App;

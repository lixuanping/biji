import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./index.css";
import styles from "./index2.module.scss";
import App from "./App";

const name = "小明";
function formatName(user) {
  return user.fisrtName + " " + user.lastName;
}
const greet = <p>hello</p>;
const jsx = (
  <div className={styles.app}>
    jsx
    <p>{name}</p>
    <p>{formatName({ fisrtName: "Harry", lastName: "Porter" })}</p>
    {name ? name : "登录"}
    {name && "小红"}
    {name || "小红"}
    <ul>
      {[0, 1, 2].map(item => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
    {greet}
    <img className={styles.logo} /* style={{ width: "300px" }} */ src={logo} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
//<></>;

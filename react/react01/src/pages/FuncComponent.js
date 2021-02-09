import React, { useState, useEffect } from "react";

export default function FuncComponent() {
  const [date, setDate] = useState(new Date());
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  //console.log("hahh");
  return (
    <div>
      <h1>FuncComponent</h1>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}

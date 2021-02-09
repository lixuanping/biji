import React from "react";

export const Context = React.createContext();
export const Provider = Context.Provider;
export const Consumer = Context.Consumer;

export const MyContext = React.createContext();
export const MyProvider = MyContext.Provider;
export const MyConsumer = MyContext.Consumer;

export const handleComsumer = Cmp => props => {
  return <Consumer>{ctx => <Cmp {...ctx} {...props} />}</Consumer>;
};

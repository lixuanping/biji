import { createStore, applyMiddleware } from "../kRedux";

import { counterReducer } from "./counterReducer";

const store = createStore(counterReducer, applyMiddleware(logger, thunk));

function logger() {
  return dispatch => action => {
    action.type && console.log(action.type + "执行啦！");
    return dispatch(action);
  };
}

function thunk({ getState }) {
  return dispatch => action => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    } else {
      return dispatch(action);
    }
    //console.log(action.type + "执行啦！");
    //return dispatch(action);
  };
}

export default store;

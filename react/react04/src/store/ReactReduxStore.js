import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { counterReducer } from "./counterReducer";

const store = createStore(
  combineReducers({
    counter: counterReducer,
  }),
  applyMiddleware(logger, thunk),
);

export default store;

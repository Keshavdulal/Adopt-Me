// store is the central repository of global app state
import { createStore } from "redux";
// reducer func takes old state and returns new state
// import reducer from "./reducers";
import combineReducers from "./reducers/index";

const store = createStore(
  combineReducers,
  // using Redux devtools extension
  // typeof window === "object" &&
  //   typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
  //   ? window.__REDUX_DEVTOOLS_EXTENSION__()
  //   : (f) => f

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

import { combineReducers } from "redux";

const counter = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    // This will increase the counter by the value passed to the increment method
    return state + action.inc;
  }
  if (action.type === "DECREMENT") {
    if (state === 0) {
      alert("Negative Numbers not allowed");
    } else {
      // This will decrease the counter by the value passed to the decrement method
      return state - action.dec;
    }
  }
  if (action.type === "RESET") {
    // This will increase the counter by the value passed to the increment method
    return 0;
  }
  // Returns the current value of the counter
  return state;
};

const myReducers = combineReducers({ counter });

export default myReducers;

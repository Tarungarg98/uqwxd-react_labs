import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "../action";
export const IncrementButton = () => {
  let dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(increment(1))}>Increase counter</button>
  );
};

export const DecrementButton = () => {
  let dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(decrement(1))}>Decrease counter</button>
  );
};

export const ResetButton = () => {
  let dispatch = useDispatch();
  return <button onClick={() => dispatch(reset())}>Reset</button>;
};

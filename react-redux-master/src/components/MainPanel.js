import React from "react";
import { IncrementButton, DecrementButton, ResetButton } from "./MyButton";
import DivPanel from "./DivPanel";

const MainPanel = () => {
  return (
    <div>
      This is main panel <IncrementButton></IncrementButton>{" "}
      <DecrementButton></DecrementButton>
      <ResetButton></ResetButton>
      <DivPanel></DivPanel>
    </div>
  );
};

export default MainPanel;

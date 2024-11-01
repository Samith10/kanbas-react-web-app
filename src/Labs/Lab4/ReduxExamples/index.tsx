import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import Counter from "../Counter";
import AddRedux from "./AddRedux";
import Add from "../../Lab3/Add";
export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
    </div>
  );
};

import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    //jsx記法
    <>
      <h1>こんにちは</h1>
      <p>おげんきですか</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));

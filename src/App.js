import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "22px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>おげんきですか</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;

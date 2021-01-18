import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("first");
  //動的に変わるnum, numを更新するsetNumという関数を定義, 初期値0
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //numにだけ関心をもたせた関数 numの値が変化したときだけ呼ばれる
  useEffect(() => {
    console.log("useEffect");
    if (num > 0) {
      if (num % 3 === 0) {
        //  faceShowFlagがfalseのとき右の要素を表示 */
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/*  faceShowFlagがtrueのとき右の要素を表示 */}
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;

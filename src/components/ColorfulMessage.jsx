import React from "react";

export const ColorfulMessage = (props) => {
  console.log("カラフル");
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    //color: color,
    color,
    fontSize: "25px"
  };

  return <p style={contentStyle}>{children}</p>;
};

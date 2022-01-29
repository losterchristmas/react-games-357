import React, { CSSProperties, useEffect, useMemo, useState } from "react";
import { IBox } from "../../type/types";

interface IProps {
  box: IBox;
  currentPlayer: string;
  handleClickBox: Function;
}

export default function Box(props: IProps) {
  const { box, handleClickBox } = props;
  const handleClick = () => {
    handleClickBox && handleClickBox(box);
  };

  const currentChessStyle = box.currentPlayer
    ? box.currentPlayer === "Block"
      ? BlackChessStyle
      : WhiteChessStyle
    : "";

  return (
    <div style={DefaultBoxBtnStyle} onClick={handleClick}>
      <div
        style={{
          ...DefaultInnerStyle,
          ...currentChessStyle,
        }}
      ></div>
    </div>
  );
}

const DefaultBoxBtnStyle: CSSProperties = {
  background: "#F6D67B",
  height: "100px",
  width: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  margin: "0px 10px 10px 0px ",
};

const DefaultInnerStyle: CSSProperties = {
  height: "80px",
  width: "80px",
  margin: "10px",
  borderRadius: "50%",
};

const WhiteChessStyle: CSSProperties = {
  background: "radial-gradient(15px 15px at 15px 15px,#fff,#e3e3e3)",
  margin: "50px auto",
  boxShadow: "2px 2px 4px rgba(0,0,0,0.3)",
};

const BlackChessStyle: CSSProperties = {
  background: "radial-gradient(10px 10px at 15px 15px,#fff,#333)",
  margin: "50px auto",
  boxShadow: "2px 2px 4px rgba(0,0,0,0.4)",
};

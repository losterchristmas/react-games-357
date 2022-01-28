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

  return (
    <div style={DefaultBoxBtnStyle} onClick={handleClick}>
      <div
        style={{
          ...DefaultInnerStyle,
          background: box.currentPlayer
            ? box.currentPlayer === "Block"
              ? "#000"
              : "#fff"
            : "",
        }}
      ></div>
    </div>
  );
}

const DefaultBoxBtnStyle: CSSProperties = {
  background: "#f5c066",
  height: "100px",
  width: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  margin: "10px",
};

const DefaultInnerStyle: CSSProperties = {
  height: "80px",
  width: "80px",
  margin: "10px",
  borderRadius: "50%",
};

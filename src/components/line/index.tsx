import { CSSProperties, useMemo, useState } from "react";
import { IBox } from "../../type/types";
import Box from "../box";

interface IProps {
  line: Array<IBox>;
  currentPlayer: string;
  handleClickBox: Function;
}

export default function Line(props: IProps) {
  const { line, currentPlayer, handleClickBox } = props;
  return (
    <div style={DefaultLineStyle}>
      {line.map((box, index) => {
        return (
          <Box
            box={box}
            key={index}
            currentPlayer={currentPlayer}
            handleClickBox={handleClickBox}
          ></Box>
        );
      })}
    </div>
  );
}

const DefaultLineStyle: CSSProperties = {
  display: "flex",
};

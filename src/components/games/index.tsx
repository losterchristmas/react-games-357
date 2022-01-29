import { Button } from "antd";
import { CSSProperties, useMemo } from "react";
import { IBox } from "../../type/types";
import Line from "../line";
import Setting from "../setting";
import { useGameHook } from "./hook";

export default function Games() {
  const {
    handleClickChangeCurrentPlayer,
    currentPlayer,
    setCurrentPlayer,
    gamesDatas,
    handleClickBox,
    gamesFinish,
    handleClickReset,
    handleClickSetting,
    settingDatas,
    setSettingDatas,
  } = useGameHook();

  return (
    <div style={DefaultPageStyle}>
      <div style={DefaultWrapper}>
        <div style={DefaultWrapperInner}>
          {gamesDatas.map((line: Array<IBox>, index: number) => {
            return (
              <Line
                key={index}
                line={line}
                currentPlayer={currentPlayer}
                handleClickBox={handleClickBox}
              ></Line>
            );
          })}
        </div>
      </div>
      <p style={DefaultTextWrapper}>
        当前玩家: {currentPlayer === "White" ? "白棋" : "黑棋"}
      </p>

      <div style={DefaultBtnWrapper}>
        <Button
          type="primary"
          disabled={gamesFinish}
          onClick={handleClickChangeCurrentPlayer}
        >
          确定
        </Button>
        <Button type="primary" danger onClick={handleClickReset}>
          重玩
        </Button>

        <Setting
          setting={settingDatas}
          setSettingDatas={setSettingDatas}
          handleClickSetting={handleClickSetting}
          gamesDatas={gamesDatas}
        ></Setting>
      </div>
    </div>
  );
}

const DefaultWrapper: CSSProperties = {
  textAlign: "center",
};

const DefaultWrapperInner: CSSProperties = {
  background: "#d19b40",
  display: "flex",
  flexDirection: "column",
  padding: "10px 0 0 10px",
};

const DefaultTextWrapper: CSSProperties = {
  marginTop: "20px",
};

const DefaultBtnWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "10px",
  width: "300px",
};

const DefaultPageStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
};

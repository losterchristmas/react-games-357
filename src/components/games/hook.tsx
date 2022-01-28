import { message, Modal } from "antd";
import { useEffect, useMemo, useState } from "react";
import { gameDatas, initGameDatas } from "../../lib/initData";
import { IBox, IPlayer } from "../../type/types";

export const useGameHook = () => {
  const [currentPlayer, setCurrentPlayer] = useState("Block");
  const [settingDatas, setSettingDatas] = useState([3, 5, 7]);
  const [initGames, setInitGames] = useState(initGameDatas(settingDatas));
  const [gamesDatas, setGamesDatas] = useState(initGames);
  const [currentAllowSetPieceLine, setCurrentAllowSetPieceLine] = useState(-1);
  const [gamesFinish, setGamesFinish] = useState(false);
  const [currentChoosePiece, setCurrentChoosePiece] = useState(
    [] as Array<IBox>
  );

  const handleClickChangeCurrentPlayer = () => {
    if (!currentChoosePiece.length) {
      message.info("请走棋");
      return;
    }
    const player = currentPlayer === "White" ? "Block" : "White";
    setCurrentPlayer(player);
    setCurrentAllowSetPieceLine(-1);
    setCurrentChoosePiece([]);
  };

  useEffect(() => {
    let Datas: any = gamesDatas.flat(Infinity);
    const gamesFinishFlag = Datas.reduce((arr: any, item: IBox) => {
      return arr && item.disable;
    }, true);
    if (gamesFinishFlag) {
      const player = currentPlayer === "White" ? "黑棋" : "白棋";
      Modal.success({
        title: "游戏结束",
        content: `${player}获胜`,
      });
    }
  }, [gamesDatas]);

  useEffect(() => {
    setInitGames(initGameDatas(settingDatas));
  }, [settingDatas]);

  useEffect(() => {
    resetInitGamesDatas();
  }, [initGames]);

  const resetInitGamesDatas = () => {
    setGamesDatas(initGames);
    setCurrentPlayer("Block");
    setCurrentAllowSetPieceLine(-1);
  };

  const handleClickBox = (box: IBox) => {
    if (noAllowSetPiece(box)) {
      return;
    }
    setPiece(box);
  };

  const noAllowSetPiece = (box: IBox) => {
    if (
      (currentAllowSetPieceLine > -1 &&
        box.line !== currentAllowSetPieceLine) ||
      box.disable
    ) {
      return true;
    }
    setCurrentAllowSetPieceLine(box.line);
    return false;
  };

  const setPiece = (box: IBox) => {
    const { line, row } = box;
    setCurrentChoosePiece([...currentChoosePiece, box]);
    setGamesDatas((item) => {
      const _item = JSON.parse(JSON.stringify(item));
      _item[line][row].disable = true;
      _item[line][row].currentPlayer = currentPlayer as IPlayer;
      return _item;
    });
  };

  const handleClickReset = () => {
    Modal.confirm({
      content: `确认重玩么？`,
      okText: "重玩",
      cancelText: "取消",
      onOk: () => {
        resetInitGamesDatas();
      },
      onCancel: () => {},
    });
  };

  const handleClickSetting = () => {
    resetInitGamesDatas();
  };

  return {
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
  };
};

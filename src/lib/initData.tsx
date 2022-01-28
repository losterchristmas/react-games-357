import { IBox } from "../type/types";

export const gameDatas: Array<Array<IBox>> = [
  [
    {
      currentPlayer: "",
      disable: false,
      line: 0,
      row: 0,
    },
    {
      currentPlayer: "",
      disable: false,
      line: 0,
      row: 1,
    },
    {
      currentPlayer: "",
      disable: false,
      line: 0,
      row: 2,
    },
  ],
  [
    {
      currentPlayer: "",
      disable: false,
      line: 1,
      row: 0,
    },
    {
      currentPlayer: "",
      disable: false,
      line: 1,
      row: 1,
    },
    {
      currentPlayer: "",
      disable: false,
      line: 1,
      row: 2,
    },
    {
      currentPlayer: "",
      disable: false,
      line: 1,
      row: 3,
    },
    {
      currentPlayer: "",
      disable: false,
      line: 1,
      row: 4,
    },
  ],
  [
    {
      currentPlayer: "",
      disable: false,
      line: 2,
      row: 0,
    },
    {
      currentPlayer: "",
      disable: false,
      line: 2,
      row: 1,
    },
    {
      currentPlayer: "",
      disable: false,
      line: 2,
      row: 2,
    },
    {
      currentPlayer: "",
      disable: false,
      line: 2,
      row: 3,
    },
    {
      currentPlayer: "",
      disable: false,
      line: 2,
      row: 4,
    },
    {
      currentPlayer: "",
      disable: false,
      line: 2,
      row: 5,
    },
    {
      currentPlayer: "",
      disable: false,
      line: 2,
      row: 6,
    },
  ],
];

export const initGameDatas = (arr: Array<number>): Array<Array<IBox>> | [] => {
  return arr.reduce((total: any, item: number, index: number) => {
    let data = [];
    for (let x = 1; x <= item; x++) {
      data.push({
        currentPlayer: "",
        disable: false,
        line: index,
        row: x - 1,
      });
    }
    return [...total, data];
  }, []);
};

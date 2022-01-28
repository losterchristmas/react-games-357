// export interface IPlayer{

// }

export type IPlayer = "White" | "Block" | "";

export interface IBox {
  currentPlayer: IPlayer;
  disable: boolean;
  line: number;
  row: number;
}

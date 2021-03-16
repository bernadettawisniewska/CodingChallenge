import {Coord} from "./base-weather";

export interface BaseInfo {
  id: number
  name: string
  temp: number;
  windStrenth: number;
  path: string
  coord: Coord
}

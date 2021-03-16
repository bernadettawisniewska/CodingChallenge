import {Coord} from "../models/base-weather";

export class BaseInfo {
  public id: number;
  public name: string;
  public temp: number;
  public windStrenth: number;
  public path: string
  public coord: Coord

  constructor(i: number, n: string, t: number, w: number, p: string, c: Coord) {
    this.id = i;
    this.name = n;
    this.temp = t;
    this.windStrenth = w;
    this.path = p;
    this.coord = c;
  }
}

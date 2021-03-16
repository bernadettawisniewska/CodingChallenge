import {Coord} from "./base-weather";

export interface CityDetail {
  id: number,
  name: string,
  state: string,
  country: string;
  coord: Coord;
}

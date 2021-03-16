export interface BaseWeather {
  coord: Coord
  main: Main;
  wind: Wind;
  dt: number;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Coord {
  lon: number;
  lat: number;
}




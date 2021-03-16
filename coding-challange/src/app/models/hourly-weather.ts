export interface HourlyWeather {
  timezone: string;
  timezone_offset: number;
  hourly: HourlyEntity[];
}

export interface HourlyEntity {
  dt: number;
  weather: WeatherEntity[];
}

export interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}

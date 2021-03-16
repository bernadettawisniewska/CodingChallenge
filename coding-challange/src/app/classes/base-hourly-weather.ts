export class BaseHourlyWeather {
  public timezone: string;
  public timezone_offset: number;
  public hourly: HourlyEntity[];

  constructor(tz: string, tzo: number, h: HourlyEntity[]) {
    this.timezone = tz;
    this.timezone_offset = tzo;
    this.hourly = h;
  }
}

export class HourlyEntity {
  public dt: number;
  public weather: WeatherEntity;

  constructor(dt: number, w: WeatherEntity) {
    this.dt = dt;
    this.weather = w;
  }
}

export class WeatherEntity {
  public description: string;
  public icon: string;

  constructor(d: string, i: string) {
    this.description = d;
    this.icon = i;
  }
}

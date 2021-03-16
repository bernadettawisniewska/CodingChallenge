import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseWeather} from "../models/base-weather";
import {BaseInfo} from "../classes/base-info";
import {map} from "rxjs/operators";
import {HourlyWeather} from "../models/hourly-weather";
import {BaseHourlyWeather, HourlyEntity} from "../classes/base-hourly-weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherHttpService {

  private baseWeatherEndpointURI = 'http://api.openweathermap.org/data/2.5/weather'
  private hourlyWeatherEndpointURI = 'http://api.openweathermap.org/data/2.5/onecall?'

  constructor(private httpClient: HttpClient) {
  }

  getBasicWeatherCity(id: number): Observable<BaseInfo> {
    const param = {'id': id.toString()};
    return this.httpClient.get<BaseWeather>(this.baseWeatherEndpointURI, {params: param}).pipe(
      map(value => {
        return new BaseInfo(value.id, value.name, value.main.temp, value.wind.speed, value.name.toLowerCase(), value.coord)
      })
    );
  }

  getHourlyWeatherCity(coord: any): Observable<BaseHourlyWeather> {
    const params = {...coord, 'exclude': 'current,minutely,daily,alerts'}
    return this.httpClient.get<HourlyWeather>(this.hourlyWeatherEndpointURI, {params: params}).pipe(
      map(value => {
        value.hourly = value.hourly.slice(0, 12);
        return new BaseHourlyWeather(value.timezone, value.timezone_offset,
          value.hourly.map(value1 => {
            return new HourlyEntity(value1.dt, value1.weather[0])
          }))
      })
    );
  }
}

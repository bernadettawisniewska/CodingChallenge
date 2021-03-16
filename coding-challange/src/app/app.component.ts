import {Component, OnInit} from '@angular/core';
import {CityDetail} from "./models/city-detail";
import {arrayCities} from "./statics/arrayCities";
import {WeatherHttpService} from "./services/weather-http.service";
import {Coord} from "./models/base-weather";
import {BaseInfo} from "./classes/base-info";
import {BaseHourlyWeather} from "./classes/base-hourly-weather";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  readonly keyToBaseWeathers = 'baseWeather';
  readonly keyHourly = 'hourly';
  baseWeathers: Array<BaseInfo>;
  forecastOfCity: BaseHourlyWeather;
  error: string;
  isLoading = false;
  isLoadingDetails = false;
  private cities: Array<CityDetail>;

  constructor(private weatherService: WeatherHttpService) {
    this.cities = arrayCities;
    this.baseWeathers = [];
  }

  ngOnInit() {
    this.isLoading = true;
    if (sessionStorage.getItem(this.keyToBaseWeathers) == null || sessionStorage.getItem(this.keyToBaseWeathers).length == 0) {
      arrayCities.forEach((city: CityDetail) => {
        this.weatherService.getBasicWeatherCity(city.id).subscribe(value => {
            this.baseWeathers.push(value)
            sessionStorage.setItem(this.keyToBaseWeathers, JSON.stringify(this.baseWeathers));
            this.isLoading = false;
          },
          error => {
            this.error = error;
            this.isLoading = false;
          })
      });
    } else {
      this.baseWeathers = JSON.parse(sessionStorage.getItem(this.keyToBaseWeathers));
      this.isLoading = false;
    }
  }

  showHourlyForecast(id: number, coord: Coord): void {
    this.isLoadingDetails = true;
    const expireTimeMin = 60;
    const key = this.keyHourly + '-' + id;
    if (localStorage.getItem(key) == null || localStorage.getItem(key).length == 0) {
      this.weatherService.getHourlyWeatherCity(coord).subscribe(value => {
        this.forecastOfCity = value;
        let expData = new Date(new Date().getTime() + (60000 * expireTimeMin));
        localStorage.setItem(key, JSON.stringify({
          'expire': expData.toISOString(),
          'cityForecast': this.forecastOfCity
        }));
        this.isLoadingDetails = false;
      });
    } else {
      const dataFromLocalStorage = new Date(JSON.parse(localStorage.getItem(key)).expire);
      console.log(dataFromLocalStorage);
      if (dataFromLocalStorage < new Date()) {
        this.weatherService.getHourlyWeatherCity(coord).subscribe(value => {
          this.forecastOfCity = value;
          let expData = new Date(new Date().getTime() + (60000 * expireTimeMin));
          localStorage.setItem(key, JSON.stringify({
            'expire': expData.toISOString(),
            'cityForecast': this.forecastOfCity
          }));
        });
        this.isLoadingDetails = false;

      } else {
        this.forecastOfCity = JSON.parse(localStorage.getItem(key)).cityForecast;
        this.isLoadingDetails = false;

      }
    }

  }


}

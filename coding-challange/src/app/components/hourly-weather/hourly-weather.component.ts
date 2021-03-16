import {Component, Input, OnInit} from '@angular/core';
import {BaseHourlyWeather} from "../../classes/base-hourly-weather";

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent implements OnInit {

  @Input()
  public forecastOfCity: BaseHourlyWeather;

  constructor() {
  }

  ngOnInit(): void {
  }

}

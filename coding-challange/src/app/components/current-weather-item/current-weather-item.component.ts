import {Component, Input} from '@angular/core';
import {BaseInfo} from "../../models/base-info";


@Component({
  selector: 'app-current-weather-item',
  templateUrl: './current-weather-item.component.html',
  styleUrls: ['./current-weather-item.component.scss']
})
export class CurrentWeatherItemComponent {

  // @ts-ignore
  @Input()
  weatherOfCity: BaseInfo;

  constructor() {
  }

}

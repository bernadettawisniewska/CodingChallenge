import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppIdInterceptor} from "./core/interceptors/app-id.interceptor";
import {CurrentWeatherItemComponent} from './components/current-weather-item/current-weather-item.component';
import {HourlyWeatherComponent} from './components/hourly-weather/hourly-weather.component';
import {TimeComponent} from './components/time/time.component';
import {LoaderComponent} from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherItemComponent,
    HourlyWeatherComponent,
    TimeComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppIdInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

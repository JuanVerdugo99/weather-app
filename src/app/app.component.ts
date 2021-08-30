import { Component, OnInit } from '@angular/core';

import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Weather app';
  
  constructor(private weather: WeatherService) {}

  ngOnInit() {
    this.weather.getWeather('culiacan','mx')
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

  getWeather(cityName: string, countryCode?: string) {
    this.weather.getWeather(cityName, countryCode)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    this.getWeather(cityName.value, countryCode.value)
    cityName.value = '';
    countryCode.value = '';
    cityName.focus
    return false
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API_KEY: string = environment.APIKEY;
  URL: string = '';

  constructor(private http: HttpClient) { 
    this.URL = `https://api.openweathermap.org/data/2.5/weather?appid=${this.API_KEY}&q=`
  }

  getWeather(cityName: string, countryCode?: string) {
    return countryCode ? this.http.get(`${this.URL}${cityName},${countryCode}`) 
                       : this.http.get(`${this.URL}${cityName}`)
  }
}

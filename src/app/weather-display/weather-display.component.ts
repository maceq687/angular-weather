import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import apiConfig from '../../assets/apiConfig.json';
import tempData from '../../assets/weather.json';
import { ApiHttpService } from '../services/api-http.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.sass'],
})
export class WeatherDisplayComponent implements OnInit {
  api = apiConfig;
  name: string = 'City';
  country: string = 'Country';
  currentWeather: Weather = tempData as unknown as Weather;
  iconUrl = this.api.icon_url;
  temperature: number = 0;
  temperatureFeelsLike: number = 0;
  loaded = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiHttpService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.name = params?.['name'];
      this.country = params?.['country'];
      var lat = params?.['lat'];
      var lon = params?.['lon'];
      var url =
        this.api.weather_api +
        'weather?lat=' +
        lat +
        '&lon=' +
        lon +
        '&appid=' +
        this.api.api_key +
        '&units=metric';
      if (url.includes('undefined')) {
        console.error('Missing parameters in query');
      } else {
        this.apiService.get(url).subscribe({
          next: (data) => {
            this.currentWeather = data as unknown as Weather;
          },
          complete: () => {
            this.iconUrl =
              this.iconUrl + this.currentWeather.weather[0].icon + '@2x.png';
            this.temperature = Math.round(this.currentWeather.main.temp);
            this.temperatureFeelsLike = Math.round(
              this.currentWeather.main.feels_like
            );
            this.loaded = true;
          },
          error: (err) => console.error(err),
        });
      }
    });
  }
}

export interface Weather {
  coord: {};
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  rain?: {};
  snow?: {};
  dt: number;
  sys: {};
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

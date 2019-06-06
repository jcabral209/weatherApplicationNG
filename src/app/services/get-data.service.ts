import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DataInSpec, Coord, Wind, Sys, Weather } from '../interfaces/data-in-spec';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  const appKey = '4109ffc3fcbdb1d5f8c9711fceac0e39';
  const weatherNow = 'https://api.openweathermap.org/data/2.5/weather?q=';
  citySearch: string;

  info: any = {};
  cityName: string;
  main: DataInSpec;
  windSpeed: number;
  humidity: number;
  coord: Coord;
  temp: number;
  wind: Wind;
  sys: Sys;
  icon: string;
  weather: Weather[];
  descriptionWeather: string;

  constructor(private dataService: DataService) { }
  
  ngOnInit() {

    this.citySearch = 'Stockton';
  }

return this.dataService
  .getURL(this.weatherNow + this.citySearch + '&appid=' + this.appKey);

console.log('This was the city to be search ' + this.citySearch);
this.apiURl = this.weatherNow + this.citySearch + '&appid=' + this.appKey;
console.log('This is the URL to be search ' + this.apiURl);
this.dataService.getURL(this.apiURl).subscribe
  (
    x => {
      console.log(x);
      this.info = x;
      console.log(this.info.name);
      this.temp = this.info.main.temp;
      this.humidity = this.info.main.humidity;
      console.log(this.info.main.temp);
      this.cityName = this.info.name;
      this.windSpeed = this.info.wind.speed;
      this.main = this.info.main;
      this.icon = this.info.weather[0].icon;
      console.log('This is an icon ' + this.icon);
      this.weather = x.weather;
      this.descriptionWeather = this.info.weather[0].description;
      console.log(this.descriptionWeather);
    }
  );




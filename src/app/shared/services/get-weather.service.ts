import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { DataInSpec } from '../interfaces/data-in-spec';


@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  private appKey = '4109ffc3fcbdb1d5f8c9711fceac0e39';
  private weatherNow = 'https://api.openweathermap.org/data/2.5/weather?q=';

  private localWeather: DataInSpec;
  private nfo: any;

  constructor(
    private dataService: DataService,
    private http: HttpClient
    ) { }

  getURLDataP(citySearch: string) {
    const url = (this.weatherNow + citySearch + '&appid=' + this.appKey);
    console.log ('This is the test URL', url);
    const promise = new Promise((resolve, reject) => {
      this.http
        .get(url)
        .toPromise()
        .then(
          x => {
            console.log('This is the X OBJECT', x);
            this.nfo = x;
            console.log('TEST +++++====>>>>>', x);
            this.localWeather = {
                cityName: this.nfo.name,
                windSpeed: this.nfo.wind.speed,
                humidity: this.nfo.main.humidity,
                lat: this.nfo.coord.lat,
                lon: this.nfo.coord.lon,
                temp: this.nfo.main.temp,
                icon: this.nfo.weather[0].icon,
                descriptionWeather: this.nfo.weather[0].description,
            };
            console.log('CityName =========>', this.localWeather.cityName);
            console.log('Wind ===========>>>>>>', this.localWeather.windSpeed);
            console.log('Humidity =============>>>>>', this.localWeather.humidity);
            console.log(this.localWeather.temp);
            console.log(this.localWeather.lat);
            console.log(this.localWeather.lon);
            console.log(this.localWeather.icon);
            console.log('============>>>>>', this.localWeather.descriptionWeather);


            resolve();
          },
          msg => {
            console.log('Your http api request got rejected!');
            reject(msg);
          }
        );
    });
    return promise;
  }

}


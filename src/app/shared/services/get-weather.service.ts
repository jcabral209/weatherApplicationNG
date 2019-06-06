import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { ICoord } from '../interfaces/data-in-spec';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  private appKey = '4109ffc3fcbdb1d5f8c9711fceac0e39';
  private weatherNow = 'https://api.openweathermap.org/data/2.5/weather?q=';

  private localWeather: ICoord;
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
            console.log(this.nfo.coord.lat);
            this.localWeather = {
              lat: this.nfo.coord.lat,
              lon: this.nfo.coord.lon
            };
            console.log(this.localWeather.lat);
            console.log(this.localWeather.lon);
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


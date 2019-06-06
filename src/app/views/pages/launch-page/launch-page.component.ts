import { Component, OnInit } from '@angular/core';
import * as cityData from '../../../../assets/openWeatherMapCities.json';

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.scss']
})
export class LaunchPageComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    console.log(cityData);

  }

}


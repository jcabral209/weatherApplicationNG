import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from 'src/app/shared/services/get-weather.service';


@Component({
  selector: 'app-daily-detail-page',
  templateUrl: './daily-detail-page.component.html',
  styleUrls: ['./daily-detail-page.component.scss']
})
export class DailyDetailPageComponent implements OnInit {

  constructor(private weatherService: GetWeatherService) { }

  ngOnInit() {
    this.weatherService.getURLDataP('Modesto');
  }

}

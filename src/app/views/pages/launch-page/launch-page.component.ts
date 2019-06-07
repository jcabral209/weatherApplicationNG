import { Component, OnInit } from '@angular/core';
// import { AutoCompleteModule } from 'primeng/autocomplete';
// import * as cityData from '../../../../assets/worldCities.json';

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.scss']
})
export class LaunchPageComponent implements OnInit {

  // city: any;

  // cities: any[];

  // filteredCountriesSingle: any[];

  // constructor() { }

  ngOnInit() {
    // console.log(cityData);

  }

  // filterCountry(query, cities: any[]):any[] {
  //   //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
  //   let filtered : any[] = [];
  //   for(let i = 0; i < cities.length; i++) {
  //       let city = cities[i];
  //       // if (cityData.city.toLowerCase().indexOf(query.toLowerCase()) === 0) {
  //       //     filtered.push(city);
  //       // }
//     }
//     return filtered;
// }

}


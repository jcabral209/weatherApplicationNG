import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchPageComponent } from './views/pages/launch-page/launch-page.component';
import { SelectPageComponent } from './views/pages/select-page/select-page.component';
import { MainDetailPageComponent } from './views/pages/main-detail-page/main-detail-page.component';
import { DailyDetailPageComponent } from './views/pages/daily-detail-page/daily-detail-page.component';
import { HourlyDetailPageComponent } from './views/pages/hourly-detail-page/hourly-detail-page.component';
import { ChartDetailPageComponent } from './views/pages/chart-detail-page/chart-detail-page.component';
import { MapPageComponent } from './views/pages/map-page/map-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchPageComponent,
    SelectPageComponent,
    MainDetailPageComponent,
    DailyDetailPageComponent,
    HourlyDetailPageComponent,
    ChartDetailPageComponent,
    MapPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

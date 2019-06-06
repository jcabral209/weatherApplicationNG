import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyDetailPageComponent } from './hourly-detail-page.component';

describe('HourlyDetailPageComponent', () => {
  let component: HourlyDetailPageComponent;
  let fixture: ComponentFixture<HourlyDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDetailPageComponent } from './chart-detail-page.component';

describe('ChartDetailPageComponent', () => {
  let component: ChartDetailPageComponent;
  let fixture: ComponentFixture<ChartDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

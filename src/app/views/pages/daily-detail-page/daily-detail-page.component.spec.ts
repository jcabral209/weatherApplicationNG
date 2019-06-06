import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDetailPageComponent } from './daily-detail-page.component';

describe('DailyDetailPageComponent', () => {
  let component: DailyDetailPageComponent;
  let fixture: ComponentFixture<DailyDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

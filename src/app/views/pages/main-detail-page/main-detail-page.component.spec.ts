import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetailPageComponent } from './main-detail-page.component';

describe('MainDetailPageComponent', () => {
  let component: MainDetailPageComponent;
  let fixture: ComponentFixture<MainDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

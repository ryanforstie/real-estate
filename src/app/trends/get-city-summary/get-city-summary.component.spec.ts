import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCitySummaryComponent } from './get-city-summary.component';

describe('GetCitySummaryComponent', () => {
  let component: GetCitySummaryComponent;
  let fixture: ComponentFixture<GetCitySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCitySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCitySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

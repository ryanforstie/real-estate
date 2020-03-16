import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInvestmentPerformanceComponent } from './get-investment-performance.component';

describe('GetInvestmentPerformanceComponent', () => {
  let component: GetInvestmentPerformanceComponent;
  let fixture: ComponentFixture<GetInvestmentPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetInvestmentPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInvestmentPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

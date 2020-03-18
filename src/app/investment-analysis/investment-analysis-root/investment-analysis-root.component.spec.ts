import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentAnalysisRootComponent } from './investment-analysis-root.component';

describe('InvestmentAnalysisRootComponent', () => {
  let component: InvestmentAnalysisRootComponent;
  let fixture: ComponentFixture<InvestmentAnalysisRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentAnalysisRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentAnalysisRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

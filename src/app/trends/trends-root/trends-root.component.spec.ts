import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsRootComponent } from './trends-root.component';

describe('TrendsRootComponent', () => {
  let component: TrendsRootComponent;
  let fixture: ComponentFixture<TrendsRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendsRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopMarketsComponent } from './list-top-markets.component';

describe('ListTopMarketsComponent', () => {
  let component: ListTopMarketsComponent;
  let fixture: ComponentFixture<ListTopMarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTopMarketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

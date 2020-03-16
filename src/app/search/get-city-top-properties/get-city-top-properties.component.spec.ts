import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCityTopPropertiesComponent } from './get-city-top-properties.component';

describe('GetCityTopPropertiesComponent', () => {
  let component: GetCityTopPropertiesComponent;
  let fixture: ComponentFixture<GetCityTopPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCityTopPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCityTopPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

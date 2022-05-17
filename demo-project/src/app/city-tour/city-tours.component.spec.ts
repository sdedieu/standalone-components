import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTourComponent } from './city-tours.component';

describe('CityTourComponent', () => {
  let component: CityTourComponent;
  let fixture: ComponentFixture<CityTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityTourComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

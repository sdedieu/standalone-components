import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { City } from '../shared/models/city';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import * as fromCityTour from './+state';

@Component({
  selector: 'app-city-tours',
  templateUrl: './city-tours.component.html',
  styleUrls: ['./city-tours.component.css']
})
export class CityTourComponent implements OnInit {
  search = '';
  isLoading$: Observable<boolean> = EMPTY;
  cities$: Observable<City[]> = EMPTY

  constructor(
    private store: Store<fromCityTour.CityTourRootState>) { }

  ngOnInit(): void {
    this.cities$ = this.store.select(fromCityTour.selectCities);
    this.isLoading$ = this.store.select(fromCityTour.selectIsLoading);

    this.dispatchSearch();
  }

  dispatchSearch = _.debounce(() => {
    console.log('dispatchSearch debounced');
    return this.store.dispatch(fromCityTour.loadCities({ search: this.search, urgent: false }));
  }, 500);

}

import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { City } from '../shared/models/city';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import * as fromCityTour from './+state';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, ofType } from '@ngrx/effects';

@Component({
  selector: 'app-city-tours',
  templateUrl: './city-tours.component.html',
  styleUrls: ['./city-tours.component.css']
})
export class CityTourComponent implements OnInit {
  search = '';
  urgent = false;
  isLoading$: Observable<boolean> = EMPTY;
  cities$: Observable<City[]> = EMPTY

  constructor(
    private actions$: Actions,
    private store: Store<fromCityTour.CityTourRootState>,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cities$ = this.store.select(fromCityTour.selectCities);
    this.isLoading$ = this.store.select(fromCityTour.selectIsLoading);

    this.actions$.pipe(
      ofType(fromCityTour.loadCitiesFailure)).subscribe(() =>
        this._snackBar.open('Error loading cities', '', {
          duration: 2000,
        })
      );

    this.dispatchSearch();
  }

  dispatchSearch = _.debounce(() => {
    console.log('dispatchSearch debounced', this.search, this.urgent);
    this.store.dispatch(fromCityTour.loadCities({ search: this.search, urgent: this.urgent }));
    console.log('dispatchSearch debounced end');
  }, 500);

  /*
  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  */

}


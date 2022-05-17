import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CityService } from "src/app/shared/services/city.service";
import * as CityTourActions from './city-tour.actions';
import { City } from "src/app/shared/models/city";


@Injectable()
export class CityTourEffects {

  constructor(private cityService: CityService, private actions$: Actions) { }

  loadCities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CityTourActions.loadCities),
      switchMap(action => this.cityService.find(action.search, action.urgent)),
      map((cities: City[]) => CityTourActions.citiesLoaded({ cities })),
      catchError(err => of(CityTourActions.loadCitiesFailure()))
    )
  );
}


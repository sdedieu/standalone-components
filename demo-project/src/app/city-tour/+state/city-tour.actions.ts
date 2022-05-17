import { createAction, props } from '@ngrx/store';

export const citiesLoaded = createAction(
  '[CityTour] Cities Loaded',
  props<{ cities: any[] }>()
);

export const loadCities = createAction(
  '[CityTour] Load Cities',
  props<{ search: string, urgent: boolean }>()
);

export const loadCitiesFailure = createAction(
  '[CityTour] Load Cities Failure'
);

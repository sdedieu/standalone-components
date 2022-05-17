import { createReducer, on } from '@ngrx/store';
import { City } from 'src/app/shared/models/city';
import * as CityTourActions from './city-tour.actions';

export const cityTourFeatureKey = 'cityTour';

export interface State {
  cities: City[];
  search: string;
  isLoading: boolean;
}

export interface CityTourRootState {
  cityTour: State;
}

export const initialState: State = {
  cities: [],
  search: '',
  isLoading: false
};


export const reducer = createReducer(
  initialState,

  on(CityTourActions.loadCities, (state, action) => ({
    ...state,
    isLoading: true
  })),
  on(CityTourActions.citiesLoaded, (state, action) => ({
    ...state,
    isLoading: false,
    cities: action.cities
  })),
  on(CityTourActions.loadCitiesFailure, (state, action) => ({
    ...state,
    isLoading: false
  }))
);

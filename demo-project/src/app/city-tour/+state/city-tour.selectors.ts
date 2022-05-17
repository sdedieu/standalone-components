import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCityTourState from "./city-tour.reducer";

// Create feature selector
export const selectCityTour = createFeatureSelector<fromCityTourState.State>(
  fromCityTourState.cityTourFeatureKey
);

// Use feature selector to get data from feature branch
export const selectCities = createSelector(selectCityTour, s => s.cities);

export const selectIsLoading = createSelector(selectCityTour, s => s.isLoading);
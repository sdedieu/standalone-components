import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityTourRoutingModule } from './city-tours-routing.module';
import { UiModule } from '../shared/ui/ui.module';
import { CityTourComponent } from './city-tours.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import * as fromCityTour from './+state/city-tour.reducer';
import { CityTourEffects } from './+state/city-tour.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    CityTourComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSnackBarModule,
    FormsModule,
    CityTourRoutingModule,
    StoreModule.forFeature(fromCityTour.cityTourFeatureKey, fromCityTour.reducer),
    EffectsModule.forFeature([CityTourEffects])
  ]
})
export class CityTourModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityCardComponent } from './city-card/city-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CityCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    CityCardComponent
  ]
})
export class UiModule { }

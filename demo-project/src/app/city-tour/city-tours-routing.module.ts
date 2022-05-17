import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityTourComponent } from './city-tours.component';

const routes: Routes = [
  { path: '', component: CityTourComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityTourRoutingModule { }

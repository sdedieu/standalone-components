import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'city-tours',
    loadChildren: () => import('./city-tour/city-tours.module').then(m => m.CityTourModule)
  },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/city-tours', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

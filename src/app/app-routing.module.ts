import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchLocationComponent } from './search-location/search-location.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';

const routes: Routes = [

  {
    path: '',
    component: SearchLocationComponent
  },
  {
    path: 'weather',
    component: WeatherDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

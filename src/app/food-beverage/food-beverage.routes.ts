import { Routes } from '@angular/router';
import { BarsComponent } from './bars/bars.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

export const foodBeverageRoutes: Routes = [
  { path: 'bars', component: BarsComponent },
  { path: 'restaurant', component: RestaurantComponent },
];

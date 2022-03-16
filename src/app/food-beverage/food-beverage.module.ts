import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodBeverageComponent } from './food-beverage.component';
import { BarsComponent } from './bars/bars.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RouterModule } from '@angular/router';
import { foodBeverageRoutes } from './food-beverage.routes';



@NgModule({
  declarations: [FoodBeverageComponent, BarsComponent, RestaurantComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(foodBeverageRoutes)
  ]
})
export class FoodBeverageModule { }

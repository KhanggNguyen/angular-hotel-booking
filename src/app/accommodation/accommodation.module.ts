import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { accommodationRoutes } from './accommodation.routes';
import { AccommodationComponent } from './accommodation.component';
import { RoomsComponent } from './rooms/rooms.component';

@NgModule({
  declarations: [AccommodationComponent, RoomsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(accommodationRoutes)
  ]
})
export class AccommodationModule { }

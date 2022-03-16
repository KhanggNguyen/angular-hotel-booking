import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { lifestylesRoutes } from './lifestyle.routes';
import { LifestyleComponent } from './lifestyle.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { WellnessSpaComponent } from './wellness-spa/wellness-spa.component';



@NgModule({
  declarations: [LifestyleComponent, ActivitiesComponent, ExperiencesComponent, WellnessSpaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(lifestylesRoutes)
  ]
})
export class LifestyleModule { }

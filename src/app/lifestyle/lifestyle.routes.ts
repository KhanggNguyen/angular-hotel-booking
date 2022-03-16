import { Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { WellnessSpaComponent } from './wellness-spa/wellness-spa.component';

export const lifestylesRoutes: Routes = [
  { path: 'activities', component: ActivitiesComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'wellness-spa', component: WellnessSpaComponent },
];

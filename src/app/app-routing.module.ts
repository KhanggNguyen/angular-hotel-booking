import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { ContactComponent } from './contact/contact.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { HomeComponent } from './home/home.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full" },
  {
    path: 'accommodation',
    component: AccommodationComponent,
    loadChildren: () =>
      import('./accommodation/accommodation.module').then(
        (m) => m.AccommodationModule
      ),
  },
  {
    path: 'food-beverage',
    component: FoodBeverageComponent,
    loadChildren: () =>
      import('./food-beverage/food-beverage.module').then(
        (m) => m.FoodBeverageModule
      ),
  },
  {
    path: 'lifestyle',
    component: LifestyleComponent,
    loadChildren: () =>
      import('./lifestyle/lifestyle.module').then((m) => m.LifestyleModule),
  },
  { path: 'offers', component: OffersComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preload all modules; optionally we could
      // implement a custom preloading strategy for just some
      // of the modules (PRs welcome 😉)
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

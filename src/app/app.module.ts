import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ContactComponent } from './contact/contact.component';
import { OffersComponent } from './offers/offers.component';
import { AuthModule } from './auth/auth.module';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutFooterComponent,
    HomeComponent,
    ContactComponent,
    OffersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

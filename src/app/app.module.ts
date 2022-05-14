import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

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
import { SidenavListComponent } from './navbar/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navbar/header/header.component';
import { NavtabsComponent } from './navbar/navtabs/navtabs.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LayoutFooterComponent,
        HomeComponent,
        ContactComponent,
        OffersComponent,
        /* navbar components */
        SidenavListComponent,
        HeaderComponent,
        NavtabsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        AuthModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

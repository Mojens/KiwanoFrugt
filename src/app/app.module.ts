import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './core/auth/login/login.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { ProductsComponent } from './features/products/products.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { ContactComponent } from './features/contact/contact.component';
import { NavigationbarComponent } from './@shared/navigationbar/navigationbar.component';
import { BasketComponent } from './features/basket/basket.component';
import { FavouritesComponent } from './features/favourites/favourites.component';
import { FooterComponent } from './@shared/footer/footer.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { ForgotPasswordComponent } from './core/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './core/auth/reset-password/reset-password.component';
import { FaqComponent } from './features/faq/faq.component';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    ProductsComponent,
    AboutUsComponent,
    ContactComponent,
    NavigationbarComponent,
    BasketComponent,
    FavouritesComponent,
    FooterComponent,
    CheckoutComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    FaIconComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

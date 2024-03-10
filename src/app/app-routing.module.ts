import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./core/auth/login/login.component";
import {ForgotPasswordComponent} from "./core/auth/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./core/auth/reset-password/reset-password.component";
import {AboutUsComponent} from "./features/about-us/about-us.component";
import {BasketComponent} from "./features/basket/basket.component";
import {CheckoutComponent} from "./features/checkout/checkout.component";
import {ProductsComponent} from "./features/products/products.component";
import {HomepageComponent} from "./features/homepage/homepage.component";
import {ContactComponent} from "./features/contact/contact.component";
import {FavouritesComponent} from "./features/favourites/favourites.component";
import {FaqComponent} from "./features/faq/faq.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'log-ind', component: LoginComponent },
  { path: 'glemt-adgangskode', component: ForgotPasswordComponent },
  { path: 'nulstil-adgangskode/:reset-token', component: ResetPasswordComponent },
  { path: 'om-os', component: AboutUsComponent },
  { path: 'kurv', component: BasketComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'produkter', component: ProductsComponent},
  { path: 'kontakt', component: ContactComponent },
  { path: 'favoritter', component: FavouritesComponent },
  { path: 'faq', component: FaqComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

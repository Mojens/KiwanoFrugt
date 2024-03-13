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
import {AccountComponent} from "./features/account/account.component";
import {TermsComponent} from "./features/terms/terms.component";
import { NotFoundPageComponent } from './@shared/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'log-ind', component: LoginComponent, data: { hideNavbar: true } },
  { path: 'glemt-adgangskode', component: ForgotPasswordComponent, data: { hideNavbar: true } },
  { path: 'nulstil-adgangskode/:reset-token', component: ResetPasswordComponent, data: { hideNavbar: true } },
  { path: 'om-os', component: AboutUsComponent },
  { path: 'kurv', component: BasketComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'produkter', component: ProductsComponent},
  { path: 'produkter/:kategori', component: ProductsComponent},
  { path: 'kontakt', component: ContactComponent },
  { path: 'favoritter', component: FavouritesComponent },
//  { path: 'faq', component: FaqComponent },
  { path: 'konto', component: AccountComponent },
  { path: 'Handelsbetingelser', component: TermsComponent},
  { path: '**', component: NotFoundPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HeaderComponent } from './core/header/header.component';
import { CartComponent } from './cart/cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { SearchComponent } from './home/search/search.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { RestaurantDetailComponent } from './menu/restaurant-detail/restaurant-detail.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SignInComponent,SignUpComponent,HeaderComponent,CartComponent,CheckoutComponent,
    HomePageComponent,SearchComponent,MenuListComponent,RestaurantDetailComponent,
    PaymentComponent,NotFoundComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TT-102-Food-Ordering-App-v1';
}



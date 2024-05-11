import { Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { CartComponent } from './cart/cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { RestaurantDetailComponent } from './menu/restaurant-detail/restaurant-detail.component';

export const routes: Routes = [
    {path:'',component:SignInComponent},
    {path:'sign-up',component:SignUpComponent},
    {path:'home',component:HomePageComponent},
    {path:'cart',component:CartComponent},
    {path:'checkout',component:CheckoutComponent},
    {path:'menu',component:MenuListComponent},
    {path:'restaurants',component:RestaurantDetailComponent},
    {path:'payment',component:PaymentMethodChangeEvent}

];

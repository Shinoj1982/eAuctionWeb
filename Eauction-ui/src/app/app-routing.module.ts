import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerComponent } from './buyer/buyer.component';
import { LoginComponent } from './login/login.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [ 
  { path: 'login', component: LoginComponent },
  { path: 'buyer', component: BuyerComponent },
  { path: 'seller', component: SellerComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

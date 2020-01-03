import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

import { AguShopLayoutComponent } from './agu-shop-layout/agu-shop-layout.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: AguShopLayoutComponent,
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'my-favorites',
        component: MyFavoritesComponent
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent
      },
      {
        path: 'check-out',
        component: CheckOutComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'my-orders',
        component: MyOrdersComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AguShopRoutingModule { }

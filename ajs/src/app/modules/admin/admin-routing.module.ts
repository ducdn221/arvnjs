import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'users',
        loadChildren: './users/user.module#UserModule'
      },
      {
        path: 'products',
        loadChildren: './products/product.module#ProductModule'
      },
      {
        path: 'orders',
        component: OrdersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

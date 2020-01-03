import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';

import { AguShopLayoutComponent } from './agu-shop-layout/agu-shop-layout.component';
import { AguShopRoutingModule } from './agu-shop-routing.module';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AguShopLayoutComponent,
    MyFavoritesComponent,
    ProductsComponent,
    ProductFilterComponent
  ],
  imports: [
    CommonModule,
    AguShopRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class AguShopModule { }

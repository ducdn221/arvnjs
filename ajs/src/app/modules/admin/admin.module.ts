import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, OrdersComponent, AdminLayoutComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    SharedModule
  ],
})
export class AdminModule { }

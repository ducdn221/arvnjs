import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';
import { CustomFormsModule } from 'ng2-validation';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';

const MAT_MODULES = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
];

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MAT_MODULES,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CustomFormsModule
  ],
  declarations: [
    ProductsComponent,
    ProductFormComponent
  ]
})
export class ProductModule { }

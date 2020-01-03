import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ConfirmPopupComponent } from './components/confirm-popup/confirm-popup.component';
import { ImgUploadComponent } from './components/img-upload/img-upload.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { HeaderComponent } from './components/header/header.component';
import { AguNavbarComponent } from './components/agu-navbar/agu-navbar.component';

const MAT_MODULES = [
  MatDialogModule,
  MatButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MAT_MODULES,
    TranslateModule
  ],
  declarations: [
    ConfirmPopupComponent,
    DateFormatPipe,
    InputFormatDirective,
    ImgUploadComponent,
    OverlayComponent,
    ShoppingCartComponent,
    ProductCardComponent,
    HeaderComponent,
    AguNavbarComponent
  ],
  exports: [
    DateFormatPipe,
    InputFormatDirective,
    ImgUploadComponent,
    ShoppingCartComponent,
    ProductCardComponent,
    HeaderComponent,
    AguNavbarComponent
  ],
  entryComponents: [
    ConfirmPopupComponent,
    OverlayComponent
  ]
})
export class SharedModule { }

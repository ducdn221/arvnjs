import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ViewContainerRef } from '@angular/core';
import { MatButtonModule, MatOptionModule, MatSelectModule, MatSnackBarModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { I18nService } from './services/i18n.service';
import { UploadFileService } from './services/upload-file.service';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuard } from './guards/auth.guard';
import { UtilsService } from './services/utils.service';
import { OverlayService } from './services/overlay.service';

const MatModules = [
  MatButtonModule,
  MatSelectModule,
  MatOptionModule,
  MatSnackBarModule
];
@NgModule({
  imports: [
    CommonModule,
    MatModules,
    TranslateModule,
    HttpClientModule
  ],
  declarations: [
    PageNotFoundComponent,
    HeaderComponent
  ],
  providers: [
    UploadFileService,
    I18nService,
    AuthGuard,
    UtilsService,
    OverlayService
  ],
  exports: [
    PageNotFoundComponent,
    HeaderComponent
  ]
})
export class CoreModule { }

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatOptionModule, MatSelectModule, MatSnackBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { I18nService } from './services/i18n.service';
import { OverlayService } from './services/overlay.service';
import { UploadFileService } from './services/upload-file.service';
import { UtilsService } from './services/utils.service';

const MatModules = [
  MatButtonModule,
  MatSelectModule,
  MatOptionModule,
  MatSnackBarModule
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatModules,
    TranslateModule,
    HttpClientModule,
    NgbModule,
    SharedModule
  ],
  declarations: [
    PageNotFoundComponent
  ],
  providers: [
    UploadFileService,
    I18nService,
    AuthGuard,
    AdminAuthGuard,
    UtilsService,
    OverlayService
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class CoreModule { }

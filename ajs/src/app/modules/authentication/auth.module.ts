import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { AuthRoutingModule } from './auth-routing.module';
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const MAT_MODULES = [
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  OverlayModule
];

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MAT_MODULES,
    TranslateModule
  ],
  declarations: [
    LoginComponent,
    CallbackComponent,
    ProfileComponent
  ],
  providers: [],
  exports: [
    ProfileComponent
  ]
})
export class AuthModule { }

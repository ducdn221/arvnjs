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
import { SharedModule } from 'src/app/shared/shared.module';

import { UserResolver } from '../../../core/http/user.resolver';
import { UserService } from '../../../core/http/user.service';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';

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
    UserRoutingModule,
    MAT_MODULES,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    UsersComponent,
    AddUserComponent,
    UserDetailComponent
  ],
  providers: [
    UserService,
    UserResolver
  ],
  entryComponents: [
    AddUserComponent
  ]
})
export class UserModule { }

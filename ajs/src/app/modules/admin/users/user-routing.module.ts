import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserResolver } from '../../../core/http/user.resolver';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: ':userName/:userId',
    component: UserDetailComponent,
    // resolve: UserResolver
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UserRoutingModule { }

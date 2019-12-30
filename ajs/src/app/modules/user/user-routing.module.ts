import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserResolver } from './user.resolver';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
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

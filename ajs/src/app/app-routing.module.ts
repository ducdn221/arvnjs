import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProfileComponent } from './modules/authentication/profile/profile.component';
import { AdminAuthGuard } from './core/guards/admin-auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    loadChildren: './modules/authentication/auth.module#AuthModule'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule',
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'agu-shop',
    loadChildren: './modules/agu-shop/agu-shop.module#AguShopModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

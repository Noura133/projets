import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { UserGuard } from './user.guard';
import { VehiculeListComponent } from './components/vehicule-list/vehicule-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { User } from './models/user';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginsuccessComponent } from './components/loginsuccess/loginsuccess.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
 
  {path: 'users', component: UserListComponent, canActivate:[UserGuard] },
  {path: 'create-user', component: CreateUserComponent, canActivate:[UserGuard]},
  {path: 'update-user/:id', component: UpdateUserComponent, canActivate:[UserGuard] },
  {path: 'user-details/:id', component: UserDetailsComponent, canActivate:[UserGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'loginsuccess', component: LoginsuccessComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'vehicules', component: VehiculeListComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profil', component: ProfileComponent},
  {path: 'admin', component: AdminLayoutComponent, children:[
    {path: '', loadChildren:()=>import('./pages/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path: 'dashboard', loadChildren:()=>import('./pages/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path: 'loginadmin', loadChildren:()=>import('./pages/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule)}

  ]},
  {path: 'user', component: UserLayoutComponent, children:[
    {path: '', loadChildren:()=>import('./pages/user/home/home.module').then(m=>m.HomeModule)},
    {path: 'loginuser', loadChildren:()=>import('./pages/user/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
    {path: 'register', loadChildren:()=>import('./pages/user/register/register.module').then(m=>m.RegisterModule)}
  ]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

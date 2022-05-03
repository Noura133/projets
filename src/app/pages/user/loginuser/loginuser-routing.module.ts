import { LoginuserComponent } from './loginuser/loginuser.component';
import { LoginadminComponent } from './../../admin/loginadmin/loginadmin/loginadmin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginuserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginuserRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserComponent } from './add-user/add-user/add-user.component';
import { UserListComponent } from './user_list/user-list/user-list.component';


const routes: Routes = [
{path:'addUser',component:AddUserComponent},
{path:'userList',component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

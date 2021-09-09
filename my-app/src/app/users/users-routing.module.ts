import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/add',
    component: UserAddComponent,
  },
  {
    path: 'users/:userId',
    component: UserDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

import { AuthGuardAdmin } from '../services/auth-guard-admin.service';

const customerRoutes: Routes = [
  {
    path: '',
//    canActivate: [AuthGuardAdmin],
    children: [
      {
        path: '',
//        canActivateChild: [AuthGuardAdmin],
        children: [
          { path: '', component: CustomerListComponent },
          { path: 'edit/:id', component: CustomerEditComponent },
          { path: 'new', component: CustomerEditComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(customerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerRoutingModule { }

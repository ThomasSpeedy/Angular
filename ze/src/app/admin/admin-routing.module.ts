import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
// import { AdminDashboardComponent } from './admin-dashboard.component';
// import { ManageCrisesComponent } from './manage-crises.component';
// import { ManageHeroesComponent } from './manage-heroes.component';

import { AuthGuardAdmin } from '../services/auth-guard-admin.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuardAdmin],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuardAdmin],
        children: [
//          { path: 'crises', component: ManageCrisesComponent },
//          { path: 'heroes', component: ManageHeroesComponent },
//          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }

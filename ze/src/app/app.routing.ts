import {Routes, RouterModule, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

import { CustomerOverviewComponent } from './customer/customer-overview/customer-overview.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Routes = [
  {path: 'customer-form', component: CustomerFormComponent},
  {path: 'customers', component: CustomerOverviewComponent},

  /** Redirect Konfigurationen **/
  {path: '**', component: NotFoundComponent}, // immer als letztes konfigurieren - erste Route die matched wird angesteuert
];

export const appRouting = RouterModule.forRoot(appRoutes);

export const routingComponents = [ CustomerOverviewComponent, CustomerFormComponent, NotFoundComponent];

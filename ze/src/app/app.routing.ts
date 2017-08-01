import {Routes, RouterModule, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

import { CustomerModule } from './customer/customer.module';
//import { WorktimeOverviewComponent } from './worktime/worktime-overview/worktime-overview.component';
import { WorktimeModule } from './worktime/worktime.module';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Routes = [
  {path: 'customer-form', component: CustomerFormComponent},
  {path: 'customers', component: CustomerOverviewComponent},
  {path: 'worktime-overview', component: WorktimeOverviewComponent},

  /** Redirect Konfigurationen **/
  {path: '**', component: NotFoundComponent}, // immer als letztes konfigurieren - erste Route die matched wird angesteuert
];

export const appRouting = RouterModule.forRoot(appRoutes);

export const routingComponents = [ WorktimeOverviewComponent, CustomerOverviewComponent, CustomerFormComponent, NotFoundComponent];

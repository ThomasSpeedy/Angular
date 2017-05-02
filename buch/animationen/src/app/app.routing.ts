import {Routes, RouterModule} from '@angular/router';
import {BasicsComponent} from './basics/basics.component';
import {AutoCalculationComponent} from './auto-calculation/auto-calculation.component';
import {KeyframesComponent} from './keyframes/keyframes.component';
import {GroupingComponent} from './grouping/grouping.component';
export const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/basics', pathMatch: 'full'},
  {path: 'basics', component: BasicsComponent},
  {path: 'autocalc', component: AutoCalculationComponent},
  {path: 'keyframes', component: KeyframesComponent},
  {path: 'groups', component: GroupingComponent},
  {path: 'groups', component: GroupingComponent},
];

export const appRouting = RouterModule.forRoot(APP_ROUTES);


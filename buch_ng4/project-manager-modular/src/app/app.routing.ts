import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {SettingsComponent} from './settings/settings.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/index';
import {NotFoundComponent} from './not-found/not-found.component';
import {RxDemoComponent} from './rxdemo/rxdemo.component';
import {LoginGuard} from './login/login.guard';
//import {TasksModule} from './tasks/tasks.module';

//function loadTasksModule() {
//  return TasksModule;
//}

export const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent, data: {title: 'Startseite'}},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'settings', component: SettingsComponent, data: { title: 'Einstellungen' },
  },
  {path: 'about', component: AboutComponent, data: {title: 'Über uns'}},
  {path: 'rxdemo', component: RxDemoComponent, data: {title: 'RxJS Demo'}},
  {path: 'login', component: LoginComponent},

  {path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule'},
//  {path: 'tasks', loadChildren: loadTasksModule, canLoad: [LoginGuard]},

  /** Redirect Konfigurationen **/
  {path: 'tasks/*', redirectTo: '/tasks'},
  {path: '404', component: NotFoundComponent},

  {path: '**', redirectTo: '/404'}, // immer als letztes konfigurieren - erste Route die matched wird angesteuert
];

export const appRouting = RouterModule.forRoot(appRoutes, {
  preloadingStrategy: PreloadAllModules
});

export const routingComponents = [DashboardComponent, SettingsComponent, AboutComponent, LoginComponent, NotFoundComponent,
  RxDemoComponent];

export const routingProviders = [LoginGuard];
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { AutoCalculationComponent } from './auto-calculation/auto-calculation.component';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { QueryingComponent } from './querying/querying.component';
import { GroupingComponent } from './grouping/grouping.component';
import {appRouting} from './app.routing';
import {TabsModule} from './tabs/tabs.module';
import {PanelModule} from './panel/panel.module';
import { TodoItemComponent } from './todo-item/todo-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    AutoCalculationComponent,
    KeyframesComponent,
    QueryingComponent,
    GroupingComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabsModule,
    PanelModule,
    BrowserAnimationsModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

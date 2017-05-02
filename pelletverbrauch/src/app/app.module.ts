import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BasicTriesComponent } from './basic-tries/basic-tries.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { ConsumptionFigureComponent } from './consumption-figure/consumption-figure.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicTriesComponent,
    TimePickerComponent,
    ConsumptionFigureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

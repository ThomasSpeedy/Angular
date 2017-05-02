import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './blog/app.component';
import {BlogEntryComponent} from './blog/blog-entry.component';

export function calcRandomValue() {
  return Math.random() * 100;
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, BlogEntryComponent ],
  bootstrap: [ AppComponent ],
  providers: [{provide: 'random-value', useFactory: calcRandomValue}]
})
export class AppModule { }

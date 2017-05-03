import {Component} from '@angular/core';
import {initialEntries} from './initialEntries';
import {BlogEntry} from './blog-entry';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  entries: BlogEntry[] = [];

  constructor() {
    this.entries = [];
    this.entries = initialEntries
  }

  createBlogEntry(title:string, image:string, text:string) {
    console.log(title, image, text);
    let entry = new BlogEntry();
    entry.title = title;
    entry.image = image;
    entry.text = text;

    this.entries.push(entry);
  }
}


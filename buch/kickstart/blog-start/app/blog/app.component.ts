import {Component} from '@angular/core';
import {BlogEntry} from './blog-entry';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent  {
  entries: Array<BlogEntry> = [];
  createBlogEntry(title: string, image: string, text: string) {
    let entry = new BlogEntry();
    entry.title = title;
    entry.text = text;
    entry.image = image;
    this.entries.push(entry);
    // console.log(title, image, text);
  }
}


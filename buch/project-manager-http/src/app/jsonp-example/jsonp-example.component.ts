import {Component} from '@angular/core';
import {Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import  'rxjs/Rx';

@Component({
  templateUrl: 'jsonp-example.component.html',
  styleUrls: ['jsonp-example.component.css']
})
export class JsonpExampleComponent {

  searchResults$: Observable<any[]>;
  constructor(private jsonp: Jsonp) {
  }
  
  search(query) {
    var url =  `http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=JSONP_CALLBACK&tags=${query}&format=json`;
    this.searchResults$ = this.jsonp.request(url)
      .map(result => result.json())
      .map(data => data.items);
  }
}

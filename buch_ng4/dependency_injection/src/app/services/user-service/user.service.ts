import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class UserService {

  constructor(http: Http) {
  }

  getLoggedInUser() {
    return {
      name: 'John Doe',
      img: 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/73.jpg'
    };
  }

}


import {Observable} from 'rxjs/Observable';
export class UserService {
  checkUserExists(name: string): Observable<boolean> {
    const result = name == null || name.toLowerCase() !== 'johnny incognito';
    return Observable.of(result).delay(250);
  }
}

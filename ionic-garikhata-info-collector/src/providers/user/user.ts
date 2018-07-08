import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  register(user: User)
  {
    return this.http.post(`https://ancient-beach-51975.herokuapp.com/user`, user)
    .pipe(
      tap( (response) => {
        console.log("Registered.");
      })
    );
  }

}

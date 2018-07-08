import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credential } from '../../interfaces/credential.interface';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginProvider {

  token: string;

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
    this.token = localStorage.getItem('gic_token');
  }

  login(credentials: Credential)
  {
    return this.http.post(`https://ancient-beach-51975.herokuapp.com/login`, { user: credentials })
    .pipe(
      tap( (response) => {
        //console.log(response);
        this.token = response["token"];
        localStorage.setItem('gic_token', this.token);
      })
    );
  }

  logout()
  {
    localStorage.removeItem("gic_token");
    this.token="";
  }

}

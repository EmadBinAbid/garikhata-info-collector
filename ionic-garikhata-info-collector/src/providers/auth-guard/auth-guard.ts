import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginProvider } from '../login/login';

/*
  Generated class for the AuthGuardProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthGuardProvider {

  constructor(
    public http: HttpClient,
    private loginProvider: LoginProvider
  ) {
    console.log('Hello AuthGuardProvider Provider');
  }

  protectRoute()
  {
    if(!this.loginProvider.token)
    {
      return true;
    }
    return false;
  }

}

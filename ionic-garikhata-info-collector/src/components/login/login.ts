import { Component } from '@angular/core';
import { Credential } from '../../interfaces/credential.interface';
import { LoginProvider } from '../../providers/login/login';
import { User } from '../../interfaces/user.interface';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  loginForm: Credential = {
    username: undefined,
    password: undefined
  };

  constructor(
    private loginProvider: LoginProvider,
    private navCtrl: NavController
  ) {
    console.log('Hello LoginComponent Component');
  }

  login()
  {
    //console.log(this.loginForm);
    this.loginProvider.login(this.loginForm)
    .subscribe( ( result: {user: User} )=> {
      if(result.user)
      {
        console.log("Logged in.");
        this.navCtrl.push(TabsPage);
      }
      else
      {
        console.log("Invalid credentials.");
      }
    } );
  }

}

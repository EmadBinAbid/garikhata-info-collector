import { Component } from '@angular/core';
import { Credential } from '../../interfaces/credential.interface';
import { LoginProvider } from '../../providers/login/login';
import { User } from '../../interfaces/user.interface';
import { NavController, AlertController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { LoginRegisterPage } from '../../pages/login-register/login-register';

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
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {
    console.log('Hello LoginComponent Component');
  }

  login()
  {
    if(this.loginForm.username===undefined || this.loginForm.username==="" ||
    this.loginForm.password===undefined || this.loginForm.password==="")
    {
      this.presentAlert('Credential Error', 'Username and password are required fields.', ['Ok']);
    }
    else
    {
      this.loginProvider.login(this.loginForm)
      .subscribe( ( result: {user: User} )=> {
        if(result.user)
        {
          console.log("Logged in.");
          this.navCtrl.pop();
        }
      },  
      (err) => {
        this.presentAlert('Credential Error', 'Invalid username or password.', ['Ok']);
      }
    );
    }
  }

  presentAlert(title: string, subTitle: string, buttons: Array<string>)
  {
    let alert = this.alertCtrl.create(
      {
        title: title,
        subTitle: subTitle,
        buttons: buttons
      }
    );
    alert.present();
  }

}

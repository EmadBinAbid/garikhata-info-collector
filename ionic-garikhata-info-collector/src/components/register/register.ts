import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserProvider } from '../../providers/user/user';
import { AlertController, NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterComponent {

  registerForm: User = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  constructor(
    private userProvider: UserProvider,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {
    console.log('Hello RegisterComponent Component');
  }

  register()
  {
    if(this.registerForm.firstName==="" || this.registerForm.lastName==="" || this.registerForm.username==="" ||
    this.registerForm.email==="" || this.registerForm.password==="")
    {
      this.presentAlert('Information Error', 'All fields are required.', ['Ok']);
    }
    else
    {
      this.userProvider.register(this.registerForm)
      .subscribe( (result: { user: User }) => {
        if(result.user)
        {
          console.log("Registered.");
          console.log(result);

          this.presentAlert('Success', 'You have successfully registered to GK Info Collector.', ['Ok']);
          this.navCtrl.push(TabsPage);
        }
      },
      (err) => {
        this.presentAlert('Failure', 'Username and email already exist.', ['Ok']);
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

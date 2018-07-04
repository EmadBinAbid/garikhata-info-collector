import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserProvider } from '../../providers/user/user';

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
    firstName: undefined,
    lastName: undefined,
    username: undefined,
    email: undefined,
    password: undefined
  };

  constructor(
    private userProvider: UserProvider
  ) {
    console.log('Hello RegisterComponent Component');
  }

  register()
  {
    console.log(this.registerForm);
    this.userProvider.register(this.registerForm)
    .subscribe( (result: { user: User }) => {
      if(result.user)
      {
        console.log("Registered.");
        console.log(result);
      }
      else
      {

      }
    } );

  }

}

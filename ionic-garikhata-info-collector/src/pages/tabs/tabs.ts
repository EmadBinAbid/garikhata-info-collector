import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewPlotPage } from '../new-plot/new-plot';
import { PlotListPage } from '../plot-list/plot-list';
import { AuthGuardProvider } from '../../providers/auth-guard/auth-guard';
import { LoginRegisterPage } from '../login-register/login-register';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  newPlotPage: any = NewPlotPage;
  plotListPage: any = PlotListPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authGuardProvider: AuthGuardProvider,
    private loginProvider: LoginProvider
  ) {
    if(this.authGuardProvider.protectRoute() === true)
    {
      this.navCtrl.push(LoginRegisterPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  logoutUser()
  {
    console.log("Clicked.");
    this.loginProvider.logout();
    this.navCtrl.push(LoginRegisterPage);
  }

}

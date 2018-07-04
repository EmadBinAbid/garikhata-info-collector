import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NewPlotPage } from '../pages/new-plot/new-plot';
import { PlotListPage } from '../pages/plot-list/plot-list';
import { FormsModule } from '@angular/forms';
import { PlotProvider } from '../providers/plot/plot';
import { LoginProvider } from '../providers/login/login';
import { HttpClientModule } from '@angular/common/http';
import { LoginRegisterPage } from '../pages/login-register/login-register';
import { LoginComponent } from '../components/login/login';
import { RegisterComponent } from '../components/register/register';
import { AuthGuardProvider } from '../providers/auth-guard/auth-guard';
import { UserProvider } from '../providers/user/user';
import { PlotDescriptionPage } from '../pages/plot-description/plot-description';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    NewPlotPage,
    PlotListPage,
    LoginRegisterPage,
    LoginComponent,
    RegisterComponent,
    PlotDescriptionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    NewPlotPage,
    PlotListPage,
    LoginRegisterPage,
    LoginComponent,
    RegisterComponent,
    PlotDescriptionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlotProvider,
    LoginProvider,
    AuthGuardProvider,
    UserProvider
  ]
})
export class AppModule {}

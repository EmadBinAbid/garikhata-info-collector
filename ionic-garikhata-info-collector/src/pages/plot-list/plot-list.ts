import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlotProvider } from '../../providers/plot/plot';
import { PlotDescriptionPage } from '../plot-description/plot-description';

/**
 * Generated class for the PlotListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-plot-list',
  templateUrl: 'plot-list.html',
})
export class PlotListPage {

  plotList: Array<Object>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private plotProvider: PlotProvider
  ) {
    this.plotProvider.getAllPlots()
    .subscribe( (result)=>{
      this.plotList = result["plot"];
    } );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlotListPage');
  }

  refresh()
  {
    this.plotProvider.getAllPlots()
    .subscribe( (result)=>{
      this.plotList = result["plot"];
    } );
  }

  selectPlot(index)
  {
    this.plotProvider.setCurrentSelectedPlotIndex(index);

    this.navCtrl.push(PlotDescriptionPage);
  }

}

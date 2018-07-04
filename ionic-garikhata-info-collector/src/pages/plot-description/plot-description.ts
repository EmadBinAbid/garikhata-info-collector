import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlotProvider } from '../../providers/plot/plot';

@Component({
  selector: 'page-plot-description',
  templateUrl: 'plot-description.html',
})
export class PlotDescriptionPage {

  selectedObject: Object;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private plotProvider: PlotProvider
  ) {
    this.selectedObject = this.plotProvider.getSelectedPlotInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlotDescriptionPage');
  }

}

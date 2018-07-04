import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { PlotProvider } from '../../providers/plot/plot';

/**
 * Generated class for the NewPlotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-plot',
  templateUrl: 'new-plot.html',
})
export class NewPlotPage {

  newPlotForm = {
    plotId: undefined,
    plotUse: undefined,
    frontWidth: undefined,
    buildingName: undefined,
    officialPlotNumber: undefined,
    yearOfBuilt: undefined,
    numOfFloors: 0,
    eachFloorUsage: undefined,
    plotImages: undefined
  };

  floorArray: Array<Object> = [ {"floor": "" } ];
  shouldProceed: Boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private plotProvider: PlotProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlotPage');
  }

  proceedToFloorInfo()
  {
    if(this.newPlotForm["numOfFloors"] > 0)
    {
      for(var i=0; i<this.newPlotForm["numOfFloors"]; i++)
      {
        this.floorArray[i] = { "floor": "" };
      }
      this.shouldProceed = true;
    }
    else
    {
      this.shouldProceed = false;
      // Show some dialogue box indicating that floors must be greater than 0, where 1 means the ground floor.
    }
  }

  sendData()
  {
    this.newPlotForm["eachFloorUsage"] = this.floorArray;
    console.log(this.newPlotForm);
    this.plotProvider.addPlot(this.newPlotForm)
    .subscribe( (result)=> {
      console.log("Plot added.");
      console.log(result);

    } );
  }

}

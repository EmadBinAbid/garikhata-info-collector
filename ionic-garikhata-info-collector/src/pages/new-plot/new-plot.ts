import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { PlotProvider } from '../../providers/plot/plot';

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
  isDisabled: Boolean = false;      //For plot information ion-list

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private plotProvider: PlotProvider,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlotPage');
  }

  proceedToFloorInfo()
  {
    if(
      this.newPlotForm.plotId==="" || this.newPlotForm.plotUse==="" || this.newPlotForm.frontWidth==="" || 
      this.newPlotForm.buildingName==="" || this.newPlotForm.officialPlotNumber==="" || this.newPlotForm.yearOfBuilt==="" ||
      this.newPlotForm.numOfFloors===0 || 
      this.newPlotForm.plotId===undefined || this.newPlotForm.plotUse===undefined || this.newPlotForm.frontWidth===undefined || 
      this.newPlotForm.buildingName===undefined || this.newPlotForm.officialPlotNumber===undefined || this.newPlotForm.yearOfBuilt===undefined ||
      this.newPlotForm.numOfFloors===0
    )
    {
      this.presentAlert('Error', 'All fields are required & No. of Floors must be greater than 0.', ['Ok']);
    }
    else
    {
      if(this.newPlotForm["numOfFloors"] > 0)
      {
        for(var i=0; i<this.newPlotForm["numOfFloors"]; i++)
        {
          this.floorArray[i] = { "floor": "" };
        }
        this.presentConfirm('Confirmation', 'Are you sure you want to proceed to Floor Information?', 
        () => {
          this.shouldProceed = true;
          this.isDisabled = true;
        });
      }
      else
      {
        this.shouldProceed = false;
        this.presentAlert('Invalid Information Error', 'No. of Floors must be greater than 0.', ['Ok']);
      }
    }
  }

  editInfo()
  {
    this.shouldProceed = false;
    this.isDisabled = false;
  }

  sendData()
  {
    this.newPlotForm["eachFloorUsage"] = this.floorArray;
    console.log(this.newPlotForm);
    this.plotProvider.addPlot(this.newPlotForm)
    .subscribe( (result)=> {
      console.log("Plot added.");
      console.log(result);

      this.presentAlert('Success', 'You have successfully added the plot information.', ['Ok']);

      //Cleaning up the input fields
      this.newPlotForm.plotId = "";
      this.newPlotForm.plotUse = "";
      this.newPlotForm.frontWidth = "";
      this.newPlotForm.buildingName = "";
      this.newPlotForm.officialPlotNumber = "";
      this.newPlotForm.yearOfBuilt = "";
      this.newPlotForm.numOfFloors = 0;
      this.newPlotForm.eachFloorUsage = "";
      this.newPlotForm.plotImages = "";
      
      this.floorArray = [ {"floor": "" } ];
      this.shouldProceed = false;
      this.isDisabled = false;

    },
    (err) => {
      this.presentAlert('Failure', 'The plot with the given plot ID already exists.', ['Ok']);
    } 
    );
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

  presentConfirm(title: string, message: string, yesHandlerMethod)
  {
    let alert = this.alertCtrl.create(
      {
        title: title,
        message: message,
        buttons: [
          {
            text: 'Yes',
            handler: yesHandlerMethod
          },
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked.');
            }
          }
        ]
      }
    );
    alert.present();
  }

}

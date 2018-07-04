import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

/*
  Generated class for the PlotProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlotProvider {

  plotList: Array<Object>;
  currentSelectedPlotIndex = -1;

  constructor(public http: HttpClient) {
    console.log('Hello PlotProvider Provider');
  }

  addPlot(plotObject)
  {
    var headers = new HttpHeaders(
      {'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('gic_token')}`
      }
    );

    return this.http.post(`http://localhost:3000/plot`, plotObject, { headers })
    .pipe(
      tap( (response)=> {
        console.log("Plot added.");
      })
    );
  }

  getAllPlots()
  {
    return this.http.get(`http://localhost:3000/plot/all-plots`)
    .pipe(
      tap( (response)=> {
        console.log("Get plots.");
        this.plotList = response["plot"];
      } )
    );
  }

  setCurrentSelectedPlotIndex(index)
  {
    this.currentSelectedPlotIndex = index;
  }

  getSelectedPlotInfo()
  {
    return this.plotList[this.currentSelectedPlotIndex];
  }

}

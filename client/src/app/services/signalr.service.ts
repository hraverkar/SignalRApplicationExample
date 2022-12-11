import { Injectable } from '@angular/core';
import { ChartModel } from '../interface/chart-model';
import * as signalR from "@microsoft/signalr";

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  public data!: ChartModel[];
  private hubConnection!: signalR.HubConnection
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7057/chart')
      .build();

    this.hubConnection.start().then(() =>
      console.log('Connection Started'))
      .catch(err => console.log('Error while starting connection' + err));
  }

  public addTransferChartDataListener = () => {
    this.hubConnection.on('transferchartdata', (data) => {
      this.data = data;
      console.log(data);
    })
  }

}

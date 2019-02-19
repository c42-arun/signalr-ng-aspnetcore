import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection;

  init() {
    this.hubConnection = new signalR.HubConnectionBuilder()
                              .withUrl('http://localhost:5050/notify')
                              .build();
    // subscribe to 'getNotifications' method
    this.hubConnection.on('getNotifications', (message) => console.log(message));

    this.hubConnection.start()
            .then(() => console.log('SignalR connection started'))
            .catch(err => console.error('Error starting SignalR connection', err));
  }

  sendMessage(text: string) {
    this.hubConnection.invoke('notify', text)
      .catch(err => console.error('Error sending message to signalR', err));
  }
}

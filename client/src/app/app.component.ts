import { Component } from '@angular/core';

import { SignalRService } from './services/signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private signalRService: SignalRService) {
    signalRService.init();
  }
}

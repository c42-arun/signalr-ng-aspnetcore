import { Component, OnInit } from '@angular/core';

import { SignalRService } from './../services/signalr.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageText = 'type something';

  constructor(private signalRService: SignalRService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.signalRService.sendMessage(this.messageText);
    // console.log('Send clicked', this.messageText);
  }
}

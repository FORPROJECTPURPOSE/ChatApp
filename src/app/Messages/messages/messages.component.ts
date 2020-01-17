import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../customers/customer.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  Messages: any;
  messagesValue: any;

  phoneNumber: any;
  ticketId: any;
  inputValue: any;

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute,
              public snackBar: MatSnackBar) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      if (params.userId && params.ticketId) {
        this.customerService.getMessages(/*'94778728888'*/ params.userId, params.ticketId).subscribe(data => {
          console.log(data);
          console.log(params.userId);
          console.log('called............. 2');

          this.phoneNumber = params.userId;
          this.ticketId = params.ticketId;
          this.Messages = data;
        });
      }
    });
  }

  submitMessage(MESSAGE) {
    const bb = this.customerService.sendMessage(this.phoneNumber, this.ticketId, MESSAGE);
    console.log(bb);
  }

  showSnackBar() {
    const snackBarRef = this.snackBar.open('Message archived');
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Tickets} from '../Tickets';
import {CustomerService} from '../../customers/customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tiket-list',
  templateUrl: './tiket-list.component.html',
  styleUrls: ['./tiket-list.component.scss']
})
export class TiketListComponent implements OnInit {

  tickets: any;
  phoneId: any;

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {

      // if (params.userId && params.ticketId) {
      //   this.customerService.getMessages(/*'94778728888'*/ params.userId, params.ticketId).subscribe(data => {
      //     console.log(data);
      //     console.log(params.userId);
      //     console.log('called............. 2');
      //
      //   });
      // }

      if (params.userId) {
        this.customerService.getTicketsList(params.userId).subscribe(data => {
          console.log(data);
          console.log('data');
          console.log('called............. 1');
          this.phoneId = params.userId;
          this.tickets = data;
        });
      } else {
        console.log('dead');
      }
    });
  }

}

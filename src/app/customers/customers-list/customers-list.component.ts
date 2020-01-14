import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  customers: any;

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomersList();
    this.route.params.subscribe(params => {

      if (params.userId && params.ticketId) {
        this.customerService.getMessages(/*'94778728888'*/ params.userId, params.ticketId).subscribe(data => {
          console.log(data);
          console.log(params.userId);
          console.log('called............. 2');

        });
      }
      if (params.userId) {
        this.customerService.getTicketsList(params.userId).subscribe(data => {
          console.log(data);
          console.log('data');
          console.log('called............. 1');

        });
      } else {
        console.log('dead');
      }
    });
  }

  getCustomersList() {
    this.customerService.getCustomersList().subscribe(customers => {
      console.log(customers);
      this.customers = customers;
    });
  }

  deleteCustomers() {
    // this.customerService.deleteAll().catch(err => console.log(err));
  }

}

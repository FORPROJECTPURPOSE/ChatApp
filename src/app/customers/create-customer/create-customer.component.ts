import { Component, OnInit } from '@angular/core';
import {Customer} from '../Customer';
import {CustomerService} from '../customer.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;

  addCustomerForm = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    message: new FormControl()
  });

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.customerService.createCustomer(this.addCustomerForm.value).then(doc => {
      console.log(doc);
    });
    this.customer = new Customer();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}

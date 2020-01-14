import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomersListComponent} from './customers/customers-list/customers-list.component';
import {CreateCustomerComponent} from './customers/create-customer/create-customer.component';
import {TiketListComponent} from './Tickets/tiket-list/tiket-list.component';
import {MessagesComponent} from './Messages/messages/messages.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersListComponent },
  { path: 'customers/:userId', component: TiketListComponent },
  { path: 'customers/:userId/:ticketId', component: MessagesComponent },
  { path: 'add', component: CreateCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

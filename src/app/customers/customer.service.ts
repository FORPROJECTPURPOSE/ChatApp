import {Injectable, Input} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Customer} from './Customer';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  @Input() customer: Customer;
  private dbPath = 'tickets';
  private customersRef: AngularFirestoreCollection<unknown>;


  constructor(private db: AngularFirestore) {
    this.customersRef = db.collection(this.dbPath);
  }

  createCustomer(customer: Customer) {
    return this.customersRef.add(customer);
  }

  updateCustomer(key: string, value: any): Promise<void> {
    return this.customersRef.doc(key).update(value);
  }

  deleteCustomer(key: string): Promise<void> {
    return this.customersRef.doc(key).delete();
  }

  getCustomersList() {
    const query1 = this.db.collection('support-chat', /*ref => ref.where('status', '==', 'active')*/);
    // const query2 = this.db.collection(`support-chat/${USER_DOC}/tickets`); // get user tickets
    // const query3 = this.db.collection(`support-chat/${USER_DOC}/tickets/${TICKET_DOC}/messages`); // get user messages (Chat Window)
    return query1.snapshotChanges()
      .pipe(map(actions => actions.map(a => {
        const DATA: any = a.payload.doc.data();
        DATA.id = a.payload.doc.id;
        // this.customer.key =  a.payload.doc.id;
        // console.log('iiiiiiiiiiiiiiiii' + DATA.id);
        return DATA;
      })));
  }

  getTicketsList(USER_DOC) {
    const query2 = this.db.collection(`support-chat/${USER_DOC}/tickets/`);
    return query2.snapshotChanges()
      .pipe(map(actions => actions.map(a => {
        const DATA: any = a.payload.doc.data();
        DATA.id = a.payload.doc.id;
        return DATA;
      })));
  }

  getMessages(USER_DOC, TICKET_DOC) {
    const query3 = this.db.collection(`support-chat/${USER_DOC}/tickets/${TICKET_DOC}/messages`); // get user messages (Chat Window)
    return query3.snapshotChanges()
      .pipe(map(actions => actions.map(a => {
        const DATA: any = a.payload.doc.data();
        DATA.id = a.payload.doc.id;
        return DATA;
      })));
  }
  sendMessage(USER_DOC, TICKET_DOC, MESSAGE) {
    const query3 = this.db.collection(`support-chat/${USER_DOC}/tickets/${TICKET_DOC}/messages`); // get user messages (Chat Window)
    return query3.add({
      message: MESSAGE
    });
  }

  // deleteAll(): Promise<void> {
    // return this.customersRef.remove();
  // }

}

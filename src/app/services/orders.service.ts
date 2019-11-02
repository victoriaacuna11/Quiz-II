import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Order } from '../models/orders';
import { Observable } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  itemsCollection: AngularFirestoreCollection<Order>;
  items: Observable<Order[]>;

  constructor(private _db: AngularFirestore) { 
    const order = this._db.collection<Order>('order').valueChanges();
    this.items=order;
  }

  addOrder(order){
    this._db.collection('order').add(order);
  }

  getItems(){
    return this.items;
  }
}

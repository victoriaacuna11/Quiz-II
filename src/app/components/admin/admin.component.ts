import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/orders';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  orders: Order[];
  constructor(private _movies: MoviesServiceService, private _orders:OrdersService) { }

  ngOnInit() {
    this._orders.getItems().subscribe(items => {
      console.log(items);
      this.orders=items;
    })
  }

}

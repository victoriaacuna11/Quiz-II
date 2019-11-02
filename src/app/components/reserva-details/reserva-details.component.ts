import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/models/orders';

@Component({
  selector: 'app-reserva-details',
  templateUrl: './reserva-details.component.html',
  styleUrls: ['./reserva-details.component.scss']
})
export class ReservaDetailsComponent implements OnInit {

  @Input() order: Order;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviesAvailable:Movie[]
  moviesComingSoon:Movie[]

  constructor() { }

  ngOnInit() {

  }

}

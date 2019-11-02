import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-home',
  templateUrl: './title-home.component.html',
  styleUrls: ['./title-home.component.scss']
})
export class TitleHomeComponent implements OnInit {

  @Input() title:string;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../../models/movie';
import {MoviesServiceService} from '../../services/movies-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  id: string;
  @Input() onemovie: Movie;
  
  constructor(private _route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.id= this._route.snapshot.paramMap.get('id');
  }



}

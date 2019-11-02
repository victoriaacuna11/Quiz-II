import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../../models/movie';
import {MoviesServiceService} from '../../services/movies-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    
  @Input() onemovie: Movie;
  
  constructor() {
    
   }

  ngOnInit() {
    
  }

}

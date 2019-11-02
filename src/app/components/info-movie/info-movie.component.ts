import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {MoviesServiceService} from '../../services/movies-service.service';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.scss']
})
export class InfoMovieComponent implements OnInit {
  // @Input() 
  movie:Movie;

  constructor(private _sv: MoviesServiceService) { }

  ngOnInit() {
    this.movie=this._sv.getMovie();
  }

}

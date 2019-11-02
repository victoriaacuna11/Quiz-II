import { Component, OnInit, Input } from '@angular/core';
import {MoviesServiceService} from '../../services/movies-service.service';
import {Movie} from '../../models/movie';
@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.scss']
})
export class CarteleraComponent implements OnInit {

  movies: Movie[];

  constructor(private _sv: MoviesServiceService) { }

  ngOnInit() {
    this.movies = this._sv.getMovies();
  }
}

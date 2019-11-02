import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {MoviesServiceService} from '../../services/movies-service.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.scss']
})
export class InfoMovieComponent implements OnInit {
  // @Input() 
  movie:Movie;

  constructor(private _sv: MoviesServiceService, private _route: ActivatedRoute, 
    private _location:Location) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie():void{
    const id = this._route.snapshot.paramMap.get('id');
    this.movie=this._sv.getMovieById(id);
  }

}

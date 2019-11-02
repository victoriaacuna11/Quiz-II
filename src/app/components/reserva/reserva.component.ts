import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesServiceService } from 'src/app/services/movies-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

  movie: Movie;
  form: FormGroup;

  constructor(private _sv: MoviesServiceService, 
    private builder: FormBuilder) { 
      this.form=this.builder.group({
        name:[''],
        lastname:[''],
        phonenumber:[''],
        email:['', Validators.compose([Validators.email, Validators.required])], 
        cardnumber:['', Validators.required],
        seats: ['', Validators.required]
      });
    }

  ngOnInit() {
    this.movie=this._sv.getMovie();
  }

}

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
  name:string;
  lastname:string;
  phonenumber:string;
  email:string;
  cardnumber:string;
  seats:number;

  constructor(private _sv: MoviesServiceService, 
    private builder: FormBuilder) { 
      this.form=this.builder.group({
        name:[null,Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
        lastname:[null,Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
        phonenumber:[null,Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
        email:[null, Validators.compose([Validators.email, Validators.required, Validators.minLength(30), Validators.maxLength(500)])], 
        cardnumber:[null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
        seats: [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])]
      });
    }

  ngOnInit() {
    this.movie=this._sv.getMovie();
  }
  enviar(values){
    console.log(values);
  }
}

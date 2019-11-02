import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesServiceService } from 'src/app/services/movies-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import { TouchSequence } from 'selenium-webdriver';

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
  movieID?:string;

  constructor(private _sv: MoviesServiceService, 
    private builder: FormBuilder, private _route: ActivatedRoute, 
    private _location:Location, private _order: OrdersService) { 
      this.form=this.builder.group({
        name:[null,Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
        lastname:[null,Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
        phonenumber:[null,Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
        email:[null, Validators.compose([Validators.email, Validators.required, Validators.minLength(30), Validators.maxLength(500)])], 
        cardnumber:[null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
        seats: [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
        // movieID: ['{{this.movie.Id}}', Validators.required]
      });
    }

  ngOnInit() {
    this.getMovie();
    this.movieID = this._route.snapshot.paramMap.get('movieID');
  }
  enviar(value){

    // const movie={
    //   name: this.name,
    //   lastname: this.lastname,
    //   phonenumber: this.phonenumber,
    //   email: this.email,
    //   cardnumber: this.cardnumber,
    //   seats: this.seats,
    //   movieId:this.movie.Id,
    // }
    
    // this._order.addOrder(movie);
    // this.name= (document.getElementById())
    // const m = (name:this.name)
    // console.log(this.form.value);
    
    this._order.addOrder(this.form.value);
  }
  getMovie():void{
    const id = this._route.snapshot.paramMap.get('id');
    this.movie=this._sv.getMovieById(id);
    console.log(this.movie.Title);
  }

}

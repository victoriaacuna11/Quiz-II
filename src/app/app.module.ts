import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { MovieComponent } from './components/movie/movie.component';
import { HomeComponent } from './components/home/home.component';
import { TitleHomeComponent } from './components/title-home/title-home.component';
import { AvailablePipe } from './pipes/available.pipe';
import { NotAvailablePipe } from './pipes/not-available.pipe';
import { InfoMovieComponent } from './components/info-movie/info-movie.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ReservaComponent } from './components/reserva/reserva.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.prod';
import { AdminComponent } from './components/admin/admin.component';
import { ReservaDetailsComponent } from './components/reserva-details/reserva-details.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBannerComponent,
    CarteleraComponent,
    MovieComponent,
    HomeComponent,
    TitleHomeComponent,
    AvailablePipe,
    NotAvailablePipe,
    InfoMovieComponent,
    ReservaComponent,
    AdminComponent,
    ReservaDetailsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

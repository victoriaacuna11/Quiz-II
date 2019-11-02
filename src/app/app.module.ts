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

@NgModule({
  declarations: [
    AppComponent,
    MainBannerComponent,
    CarteleraComponent,
    MovieComponent,
    HomeComponent,
    TitleHomeComponent,
    AvailablePipe,
    NotAvailablePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoMovieComponent } from './components/info-movie/info-movie.component';


const routes: Routes = [
  {path:'', component: HomeComponent}, 
  {path: 'info/:id', component: InfoMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

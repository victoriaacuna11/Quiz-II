import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoMovieComponent } from './components/info-movie/info-movie.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [
  {path:'', component: HomeComponent}, 
  {path: 'info/:id', component: InfoMovieComponent},
  {path: 'reserva/:id', component: ReservaComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

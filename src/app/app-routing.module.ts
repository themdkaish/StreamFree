import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MovieComponent } from './Components/movie/movie.component';
import {NetflixComponent} from './Components/Netflix/Netflix.component';

const routes: Routes = [
  {path : '',redirectTo : 'login',pathMatch:'full'},
  {path : 'login' ,component : LoginComponent},
  {path : 'home' ,component : HomeComponent},
  {path : 'netflix' ,component : NetflixComponent},
  // {path : 'Download-page', component : DownloadPageComponent },
  { path: 'movie/:type/:id', component: MovieComponent },
  {path : '**',component :LoginComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

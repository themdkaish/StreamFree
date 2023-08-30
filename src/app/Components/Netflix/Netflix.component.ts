import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';


@Component({
  selector: 'app-Netflix',
  templateUrl: './Netflix.component.html',
  styleUrls: ['./Netflix.component.css']
})
export class NetflixComponent implements OnInit {
  netflixMovies : any
  constructor(private http:HttpClient, private router : Router){}
  ngOnInit(): void {
    this.getIndianMovies();
  }
  getIndianMovies() {
    this.http
      .get('/assets/data/netflix-movies.json')
      .subscribe((movies) => {
        this.netflixMovies = movies;
        console.log(this.netflixMovies)
      });
      }
  

  goToMovies(type : string ,id:string){
    this.router.navigate(['movie',type,id]);
  }
}

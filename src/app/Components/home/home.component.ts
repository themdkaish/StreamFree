import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  trendingMovies : any
  constructor(private http:HttpClient, private router : Router){}
  ngOnInit(): void {
    this.getIndianMovies();
  }
  getIndianMovies() {
    this.http
      .get('/assets/data/trending-movies.json')
      .subscribe((movies) => {
        this.trendingMovies = movies;
        console.log(this.trendingMovies)
      });
      }

  goToMovies(type : string ,id:string){
    this.router.navigate(['movie',type,id]);
  }
}

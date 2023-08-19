import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Route } from '@angular/router';
// import { Router } from 'express';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private router : Router,private auth : AuthService){}
  ngOnInit(): void {
    
  }
  goTOHome(){
    this.router.navigate(['home']);
  }

  logout(){
    this.auth.logout();
  }

}

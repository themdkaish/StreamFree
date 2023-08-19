import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
// import { Router } from 'express';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  errorMessage = "";

  constructor(private auth: AuthService, private router:Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // login(){
  //   if(this.username.trim().length === 0){
  //     this.errorMessage = "Username is required";
  //   }
  //   else if(this.password.trim().length === 0){
  //     this.errorMessage = "Password is required";
  // }
  // else{
  //   this.errorMessage = "";
  //   let res = this.auth.login(this.username, this.password);
  //   if(res == 200){
  //     this.router.navigate(['home'])
  //   }
  //   if(res == 403){
  //     this.errorMessage = "Invalid Username or Password"
  //   }
  // }
  // }

  login(){
    this.router.navigate(['home'])
  }
}

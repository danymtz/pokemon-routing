import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth : boolean = false;

  constructor() { }

  login() {
    //localStorage.setItem('aut','false'); 
    //this.auth = (localStorage.getItem('aut'))==="true";
    this.auth = true;
    localStorage.setItem('auth', this.auth.toString());
    console.log(localStorage.getItem('auth'));
    
  }

  logout(){
    this.auth = false;
    localStorage.clear();
  }

  showSession (){
    this.auth = (localStorage.getItem('auth'))==="true"; 
    //this.auth = (localStorage.getItem('auth')?.toLowerCase())==="true"; 
    return this.auth;
  }
}

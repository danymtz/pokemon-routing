import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth : boolean = false;
  public username!: string;
  public passwrod!: string;
  public token: string = '';

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

  setSession(){
    this.auth = (localStorage.getItem('auth')?.toLowerCase()==='true');
  }

  getToken(username: string, password: string){
    
    if(username == 'user' && password == '123') this.token = 'sgergersageSAFKSDJjk';

    return (this.token != '')
  }

  saveSession(username: string, password: string) {
    this.username = username;
    this.passwrod = password;
  }
}

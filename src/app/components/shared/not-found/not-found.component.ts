import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  loginForm!: FormGroup;
  error!: string;

  constructor(public authService: AuthService, private formBuilder: FormBuilder) { 
    this.authService.setSession();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      pasword: ['',Validators.required]
    })
  }

  login(){this.authService.login();}
  logout(){this.authService.logout();}
  showSession(){return this.authService.showSession();}

  onSubmit(){
    let username: string = this.loginForm.get('username')?.value;
    let password: string = this.loginForm.value.password;

    if(!this.authService.getToken(username, password)) this.error = 'usuario incorrecto';
     else this.error = '';
    

    //this. authService.saveSession(username: string, password: string)
    //localStorage.setItem('username',username);
    //localStorage.setItem('password', password);
  }

}

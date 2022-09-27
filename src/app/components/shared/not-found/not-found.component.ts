import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){this.authService.login();}
  logout(){this.authService.logout();}
  showSession(){return this.authService.showSession();}

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private router: Router, public authService: AuthService) {

  }

  public goToLogin(){

    this.router.navigate(['/login']);
  }
  public goToContact(){
    this.router.navigate(['/contact'])
  }
  
  
}

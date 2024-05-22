import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private authService : AuthService){}


  onClickLogout(){
    const modal = 'user';
this.authService.logOut(modal);
  }
}

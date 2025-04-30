import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  private authService = inject(AuthService);
  isAuth = false;

  constructor(){
    console.log(this.isAuth);

    this.authService.getAuthStatus().subscribe((authStatus) => {
      this.isAuth = authStatus;
      console.log(this.isAuth);
    })
  }

  get debugOutput(){
    console.log('[NavBarComponent] generated');

    return  '';
  }

  logoutHandler(){
    this.authService.logOut();
  }

}

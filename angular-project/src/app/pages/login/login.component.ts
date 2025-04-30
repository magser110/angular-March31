import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements AfterViewInit{
  private authService = inject(AuthService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  isAuth = false;
  userName = '';
  password = '';

  ngAfterViewInit(): void {
    this.cdr.detach();
  }

  get debugOutput(){
    console.log('[loginComponent] generated');

    return  '';
  }

  login(){
    this.authService.logIn(this.userName, this.password).subscribe((authStatus) => {
      this.isAuth = authStatus
      console.log(this.isAuth);

      if(authStatus){
        this.router.navigate(['/dashboard'])
      } else{
        alert("invalid username or password")
      }
    });
    this.cdr.detectChanges();

  }
}

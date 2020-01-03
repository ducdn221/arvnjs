import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/authentication/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agu-navbar',
  templateUrl: './agu-navbar.component.html',
  styleUrls: ['./agu-navbar.component.scss']
})
export class AguNavbarComponent implements OnInit {
  user = {};

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.user = user;
    }
  }

  logout() {
    this.authService.logout()
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/agu-shop']);
        },
        error => {
          console.log(error);
        }
      );
  }
}

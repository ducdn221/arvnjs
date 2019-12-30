import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatCheckbox, MatSelect } from '@angular/material';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { I18nService } from 'src/app/core/services/i18n.service';
import { NotifyService } from 'src/app/core/services/notify.service';
import { UtilsService } from 'src/app/core/services/utils.service';

import { environment as configs } from '../../../../../environments/environment';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('languages', null) languages: MatSelect;
  @ViewChild('rememberMe', null) rememberMe: MatCheckbox;
  userName = new FormControl(localStorage.getItem('lastLoggedInUserName') || '', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  loading = false;
  public localStorage = localStorage;
  selectedLang = configs.defaultLang;

  constructor(
    public authService: AuthService,
    private router: Router,
    public i18nService: I18nService,
    private notifyService: NotifyService,
    private utilsService: UtilsService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.languages.value = this.languages.value || 'vi';
    });
    if (this.authService.isAuthenticated()) {
      this.router.navigate([this.authService.returnUrl]);
    }
  }

  login() {
    if (this.userName.invalid || this.password.invalid) {
      return;
    }
    this.loading = true;
    this.authService.login(this.userName.value, this.password.value)
      .pipe(first())
      .subscribe(
        data => {
          if (this.rememberMe.value) {
            localStorage.setItem('lastLoggedInUserName', this.userName.value);
          } else {
            localStorage.removeItem('lastLoggedInUserName');
          }
          this.userName.reset();
          this.password.reset();
        },
        error => {
          console.log(error);
          if (error.error.code !== undefined &&
            error.error.message !== undefined &&
            error.error.code === 'OP_EXCEPTION') {
            this.notifyService.openSnackBar(error.error.message);
          } else {
            this.notifyService.openSnackBar(this.i18nService.getTranslateService().instant('LOGIN.incorrectUserNameOrPassword'));
          }
          this.loading = false;
        }
      );
  }

  loginWithAuth0() {
    const auth0Window = this.utilsService.openWindowLink(
      `https://monkeytgoku.auth0.com/wsfed/${configs.auth0.clientID}`,
      'Auth0',
      600,
      800
    );
    setTimeout(() => {
      auth0Window.close();
    }, 3000);
  }
}

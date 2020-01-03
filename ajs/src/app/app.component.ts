import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { environment as configs } from '../environments/environment';
import { I18nService } from './core/services/i18n.service';
import { UserService } from './core/http/user.service';
import { AuthService } from './modules/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ajs';
  color = 'primary';
  mode = 'indeterminate' || 'indeterminate' || 'buffer' || 'query';
  value = 50;
  bufferValue = 75;
  visible = true;

  constructor(
    private router: Router,
    private i18nService: I18nService,
    public authService: AuthService,
    private userService: UserService
  ) {  }

  ngOnInit(): void {
    this.handleLoadingBar();
    this.setDefaultLanguage();
  }

  private setDefaultLanguage() {
    this.i18nService.changeLang(configs.defaultLang);
  }

  private handleLoadingBar() {
    // Subscribe to the router events to show/hide the loading bar
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => {
        setTimeout(() => {
          this.visible = true;
        });
      });

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd || event instanceof NavigationError || event instanceof NavigationCancel)
      )
      .subscribe(() => {
        setTimeout(() => {
          this.visible = false;
        });
      });
  }
}

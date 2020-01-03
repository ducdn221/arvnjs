import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as firebase from 'firebase/app';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import { BehaviorSubject, Observable, of, Subscription, timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { environment as configs } from '../../../environments/environment';

(window as any).global = window;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  public auth$ = this.authSubject.asObservable();
  returnUrl = '';
  refreshSubscription: Subscription;
  user$: Observable<firebase.User>;

  constructor(
    public router: Router,
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute
  ) {
    this.user$ = afAuth.authState;
  }

  isLoggedIn(): boolean {
    return !this.jwtHelper.isTokenExpired();
  }

  public login(userName: string, password: string) {
    return this.http.post<any>(
      `${configs.auth.authUrl}/login`,
      {
        user_name: userName,
        password
      }).pipe(map(authResult => {
        if (authResult) {
          this.setSession(authResult);
          this.authSubject.next(true);
          this.navigateAfterLogin();
        } else {
          this.authSubject.next(false);
        }
        return authResult;
      }));
  }

  setSession(authResult): void {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('expiresAt', expiresAt);
    localStorage.setItem('user', JSON.stringify(jwt_decode(authResult.token).user));

    this.scheduleRenewal();
  }

  public scheduleRenewal(): void {
    if (!this.isLoggedIn()) { return; }
    this.unscheduleRenewal();

    const expiresAt = JSON.parse(localStorage.getItem('expiresAt'));

    const expiresIn$ = of(expiresAt).pipe(
      mergeMap(
        // tslint:disable-next-line:no-shadowed-variable
        expiresAt => {
          const now = moment().add(2, 'minutes').valueOf();
          return timer(Math.max(1, expiresAt - now), 60000);
        }
      )
    );

    this.refreshSubscription = expiresIn$.subscribe(
      () => {
        this.renewToken();
      }
    );
  }

  public unscheduleRenewal(): void {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  public renewToken() {
    this.removeSession();
    this.router.navigate(['/login']);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public navigateAfterLogin(): void {
    if (!this.returnUrl) {
      this.returnUrl = this.isAdmin() ? '/admin' : '/agu-shop';
    }
    this.router.navigate([this.returnUrl]).then(() => {
      this.returnUrl = '/agu-shop';
    });
  }

  public logout() {
    return this.http.get<any>(
      `${configs.auth.authUrl}/logout`,
      { headers: new HttpHeaders({ authorization: localStorage.getItem('token') }) }
    ).pipe(map(authResult => {
      if (authResult) {
        this.removeSession();
        this.authSubject.next(false);
        this.router.navigate(['/login']);
      }
      return authResult;
    }));
  }

  removeSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('user');
  }

  public getUserRoles(): string {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      return user.hasOwnProperty('roles') ? user.roles : '';
    } catch (Error) {
      return null;
    }
  }

  public isAdmin(): boolean {
    const roles = this.getUserRoles();
    return roles && roles.includes('admin');
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logoutFromGoogle() {
    this.afAuth.auth.signOut();
  }
}

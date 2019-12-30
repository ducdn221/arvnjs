import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<any> {
  constructor(
    private service: UserService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    console.log(route);
    console.log(state);
    return this.service.getUserById(route.paramMap.get('userId')).pipe(
      take(1),
      mergeMap(user => {
        if (user) {
          return of(user);
        } else { // id not found
          this.router.navigate(['/user']);
          return EMPTY;
        }
      })
    );
  }
}

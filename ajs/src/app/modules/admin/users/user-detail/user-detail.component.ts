import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NotifyService } from 'src/app/core/services/notify.service';

import { UserService } from '../../../../core/http/user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private notifyService: NotifyService
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => {
        return this.userService.getUserById(params.userId);
      })
    ).subscribe(user => {
      this.user = user;
    });
  }

  activeDeactive(status) {
    this.user.status = status;
    this.userService.updateUser(this.user).subscribe(
      data => {
        this.notifyService.openSnackBar(data.message);
      },
      error => {
        this.notifyService.openSnackBar('An error occurred, please try again?');
      });
  }
}

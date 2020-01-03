import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-agu-shop-layout',
  templateUrl: './agu-shop-layout.component.html',
  styleUrls: ['./agu-shop-layout.component.scss']
})
export class AguShopLayoutComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}

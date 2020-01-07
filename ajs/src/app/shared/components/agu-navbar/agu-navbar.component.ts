import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/authentication/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/core/http/shopping-cart.service';

@Component({
  selector: 'app-agu-navbar',
  templateUrl: './agu-navbar.component.html',
  styleUrls: ['./agu-navbar.component.scss']
})
export class AguNavbarComponent implements OnInit {
  user = {};
  shoppingCartItemCount = 0;

  constructor(
    public authService: AuthService,
    public router: Router,
    private shoppingCartService: ShoppingCartService
  ) { }

  async ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.user = user;
    }
    const cart$ = await this.shoppingCartService.getCart();
    cart$.valueChanges().subscribe(cart => {
      this.shoppingCartItemCount = 0;
      const items = (cart as any).items;
      for (const productId in items) {
        if (items.hasOwnProperty(productId)) {
          this.shoppingCartItemCount += items[productId].quantity;
        }
      }
    });
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

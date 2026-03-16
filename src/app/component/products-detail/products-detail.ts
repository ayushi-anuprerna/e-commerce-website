import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart-service';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-detail.html',
  styleUrl: './products-detail.css',
})
export class ProductsDetail {
  constructor(
    private router: Router,
    private cartService: CartService,
  ) {} //we have declared a variable router whose type is Router
  imgClicked() {
    this.router.navigate(['/product-info', this.createSlug(this.products.title)], {
      state: { product: this.products },
    });
  }
  createSlug(title: string): string {
    //this indicates which data type is returned by the function

    return title.toLowerCase().replace(/\s+/g, '-'); //in replace function we re searching for blank space and then replacing it by -
  }

  @Input() products!: any;

  addToCart() {
    this.cartService.addToCart(this.products, 1);
    this.cartService.notification(this.products);
  }
}

//home -->product list-->product detail
//products list-->products detail
//nav br --products list --line 27
//home-->product list

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  constructor(private cartService: CartService){}
  cartItems:any[] = []
  cartLength:number=0
  ngOnInit(){

     this.cartItems = this.cartService.getCartItems()
     this.cartLength=this.cartItems.length
  }
  increment(){

  }
  decrement(){
    
  }
 
}

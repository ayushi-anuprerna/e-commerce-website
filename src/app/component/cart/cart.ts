import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart-service';
import { RouterLink } from '@angular/router';
import { Signal } from '@angular/core';
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
  totalPrice:number=0
  
   
  ngOnInit(){

     this.cartItems = this.cartService.getCartItems()
     this.cartLength=this.cartItems.length
     this.calculateTotalPrice();
  }

  calculateTotalPrice(): number { //to calculate total price of items in cart
    for (let item of this.cartItems) {

      this.totalPrice += (item.newPrice * item.count);

    }
    return this.totalPrice;
  }
  
  increment(item:any){
    const index = this.cartItems.indexOf(item);
    this.cartItems[index].count++;
    this.totalPrice=0;
    this.calculateTotalPrice();
  }
  decrement(item:any){
    const index = this.cartItems.indexOf(item);
    if(this.cartItems[index].count>1){
    this.cartItems[index].count--;
    this.totalPrice=0;
    this.calculateTotalPrice();
    }
  }
  removeItem(item : any){
    const index=this.cartItems.indexOf(item)
    this.cartItems.splice(index,1)
    this.cartLength=this.cartLength-1
    this.totalPrice=0
    this.calculateTotalPrice()
     
  }
 applyDiscount(){
  alert("Invalid coupon code")
 }
}


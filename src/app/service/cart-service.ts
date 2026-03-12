import { Injectable } from '@angular/core';

interface CartItem{
  title:string;
  description:string;
  oldPrice:number;
  newPrice:number;
  img:string;
  count:number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems:CartItem[]=[];

  addToCart(item: CartItem,count:number){
    const existingItem = this.cartItems.find((cartItem) => cartItem.title === item.title);
    if(existingItem){
      existingItem.count += item.count; //update count if item already exists 
    }
    else{
      item.count=count
      this.cartItems.push(item);//add new item to cart
    }
  }
  getCartItems(): CartItem[]{
    return this.cartItems
  }

}

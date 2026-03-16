import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastMessage } from '../component/toast-message/toast-message';

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
  constructor (private toast: MatSnackBar){

  }
  cartItems:CartItem[]=[];

  addToCart(item: CartItem,count:number){
    const existingItem = this.cartItems.find((cartItem) => cartItem.title === item.title);
    if(existingItem){
      existingItem.count += item.count; //update count if item already exists 
    }
    else{
      item.count=count
      this.cartItems.push(item);//push new item to cart bcz cart item is an array
    }
  }
  getCartItems(): CartItem[]{ //it will return cartitem array to cart component
    return this.cartItems
  }
  notification(data : CartItem){
    
    this.toast.openFromComponent(ToastMessage,{ //which component should be displayed and what data should be passed
      data:data,
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top',
      panelClass: ['notifyInfo'] //by default css using class(panelclass)


    });
  }
  

}

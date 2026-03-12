import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart-service';


@Component({
  selector: 'app-products-detail',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './products-detail.html',
  styleUrl: './products-detail.css',
})
export class ProductsDetail {
constructor(private router : Router, private cartService: CartService){} //we have declared a variable router whose type is Router
imgClicked(){
  this.router.navigate(['/product-info',this.products.title],{state : {product:this.products}})
  
}

  
@Input() products!:any
@Output() addCartEvent=new EventEmitter<any>()



addToCart(){
  //THIS FUNCTION WILL EMIT THE DATA FROM CHILD TO PARENT THROUGH EVENT EMITTER CLASS
  this.cartService.addToCart(this.products,1);
  this.addCartEvent.emit(this.products);
}
}





//home -->product list-->product detail
//products list-->products detail
//nav br --products list --line 27
//home-->product list
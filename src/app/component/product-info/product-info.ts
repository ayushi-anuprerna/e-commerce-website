import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Signal } from '@angular/core';
import { CartService } from '../../service/cart-service';



@Component({
  selector: 'app-product-info',
  imports: [CommonModule],
  templateUrl: './product-info.html',
  styleUrl: './product-info.css',
})
export class ProductInfo {
  // constructor(private signal : Signal){}
  constructor(private service : CartService){}

  
  count = signal(1);
  mainImg: string = '';
  product: any;
  ngOnInit() {
    this.product = history.state.product;//history is a container in which we keep transfered data product in state object
    this.mainImg = this.product.img[0];
  }
  changeImg(changed: string) { //to display subimage as main image
    this.mainImg = changed;
  }
  increment() {
    this.count.set(this.count()+1)
  }
  decrement() {
    // this.count.set(this.count()-1)
    if(this.count()>1){
    this.count.update(c => c-1 )}
      
    
  }
  addItemToCart(){
    this.service.addToCart(this.product , this.count())
    this.service.notification(this.product)
  }

}

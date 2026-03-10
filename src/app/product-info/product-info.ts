import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Signal } from '@angular/core';


@Component({
  selector: 'app-product-info',
  imports: [CommonModule],
  templateUrl: './product-info.html',
  styleUrl: './product-info.css',
})
export class ProductInfo {
  // constructor(private signal : Signal){}
  count = signal(1);
  mainImg: string = '';
  product: any;
  ngOnInit() {
    this.product = history.state.product;
    this.mainImg = this.product.img[0];
  }
  changeImg(changed: string) {
    this.mainImg = changed;
    console.log('changed');
  }
  increment() {
    this.count.set(this.count()+1)
  }
  decrement() {
    // this.count.set(this.count()-1)
    if(this.count()>1){
    this.count.update(c => c-1 )}
      
    
  }
}

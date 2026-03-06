import { Component } from '@angular/core';
import { ProductDetail } from '../product-detail/product-detail';
import { CommonModule } from '@angular/common';

interface ProductDesc{
  discount:number;
  img:string;
  title:string;
  oldPrice:number;
  newPrice:number;
}


@Component({
  selector: 'app-product-list',
  standalone:true,
  imports: [ProductDetail,CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
   productList:ProductDesc[]=[{ //array of objects
    discount:25,
    img:"/images/lamp.jpeg",
    title:"Modern Ceramic Table Lamp",
    oldPrice:89.99,
    newPrice:67.49

  },
  {
    discount:30,
    img:"/images/pillow.jpeg",
    title:"Geometric Throw Pillow Set",
    oldPrice:45.99,
    newPrice:32.19
  },
  {
     discount:20,
    img:"/images/painting.png",
    title:"Abstract Canvas Wall Art",
    oldPrice:129.99,
    newPrice:103.99
  },
  {
     discount:15,
    img:"/images/vase.jpeg",
    title:"Contemporary Glass Vase",
    oldPrice:59.99,
    newPrice:50.99
  }
]
}

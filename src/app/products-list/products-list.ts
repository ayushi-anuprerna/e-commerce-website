import { Component } from '@angular/core';
import { ProductsDetail } from '../products-detail/products-detail';
import { CommonModule } from '@angular/common';


interface ProductsDesc{
  img:string;
  title:string;
  description:string;
  oldPrice:number;
  newPrice:number;

}

@Component({
  selector: 'app-products-list',
  standalone:true,
  imports: [ProductsDetail,CommonModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  productsList:ProductsDesc[]=[
    {
    img:"/images/lamp.jpeg",
    title:"Modern Ceramic Table Lamp",
    description:"Elegant white ceramic base with fabric shade",
    oldPrice:89.99,
    newPrice:67.49

  },
  {
    img:"/images/pillow.jpeg",
    title:"Geometric Throw Pillow Set",
     description:"Set of 2 decorative pillows with modern patterns",
    oldPrice:45.99,
    newPrice:32.19
  },
  {

    img:"/images/painting.png",
    title:"Abstract Canvas Wall Art",
     description:"Modern abstract print on premium canvas",
    oldPrice:129.99,
    newPrice:103.99
  },
  {
    img:"/images/vase.jpeg",
    title:"Contemporary Glass Vase",
     description:"Hand-blown glass vase with elegant curves",
    oldPrice:59.99,
    newPrice:50.99
  },{
  img:"/images/lamp.jpeg",
    title:"Modern Ceramic Table Lamp",
     description:"",
    oldPrice:89.99,
    newPrice:67.49

  },
  {
    img:"/images/pillow.jpeg",
    title:"Geometric Throw Pillow Set",
     description:"",
    oldPrice:45.99,
    newPrice:32.19
  },
  {
    img:"/images/painting.png",
    title:"Abstract Canvas Wall Art",
     description:"",
    oldPrice:129.99,
    newPrice:103.99
  },
  {
    img:"/images/vase.jpeg",
    title:"Contemporary Glass Vase",
     description:"",
    oldPrice:59.99,
    newPrice:50.99
  },
  {
  img:"/images/lamp.jpeg",
    title:"Modern Ceramic Table Lamp",
     description:"",
    oldPrice:89.99,
    newPrice:67.49

  },
  {
    img:"/images/pillow.jpeg",
    title:"Geometric Throw Pillow Set",
     description:"",
    oldPrice:45.99,
    newPrice:32.19
  },
  {
    img:"/images/painting.png",
    title:"Abstract Canvas Wall Art",
     description:"",
    oldPrice:129.99,
    newPrice:103.99
  },
  {
    img:"/images/vase.jpeg",
    title:"Contemporary Glass Vase",
     description:"",
    oldPrice:59.99,
    newPrice:50.99
  },
  {
  img:"/images/lamp.jpeg",
    title:"Modern Ceramic Table Lamp",
     description:"",
    oldPrice:89.99,
    newPrice:67.49

  },
  {
    img:"/images/pillow.jpeg",
    title:"Geometric Throw Pillow Set",
     description:"",
    oldPrice:45.99,
    newPrice:32.19
  },
  {
    img:"/images/painting.png",
    title:"Abstract Canvas Wall Art",
     description:"",
    oldPrice:129.99,
    newPrice:103.99
  },
  {
    img:"/images/vase.jpeg",
    title:"Contemporary Glass Vase",
     description:"",
    oldPrice:59.99,
    newPrice:50.99
  },
  {
  img:"/images/lamp.jpeg",
    title:"Modern Ceramic Table Lamp",
     description:"",
    oldPrice:89.99,
    newPrice:67.49

  },
  {
    img:"/images/pillow.jpeg",
    title:"Geometric Throw Pillow Set",
     description:"",
    oldPrice:45.99,
    newPrice:32.19
  },
  {
    img:"/images/painting.png",
    title:"Abstract Canvas Wall Art",
     description:"",
    oldPrice:129.99,
    newPrice:103.99
  },
  {
    img:"/images/vase.jpeg",
    title:"Contemporary Glass Vase",
     description:"",
    oldPrice:59.99,
    newPrice:50.99
  },
  {
  img:"/images/lamp.jpeg",
    title:"Modern Ceramic Table Lamp",
     description:"",
    oldPrice:89.99,
    newPrice:67.49

  },
  {
    img:"/images/pillow.jpeg",
    title:"Geometric Throw Pillow Set",
     description:"",
    oldPrice:45.99,
    newPrice:32.19
  },
  {
    img:"/images/painting.png",
    title:"Abstract Canvas Wall Art",
     description:"",
    oldPrice:129.99,
    newPrice:103.99
  },
  {
   
    img:"/images/vase.jpeg",
    title:"Contemporary Glass Vase",
     description:"",
    oldPrice:59.99,
    newPrice:50.99
  },
  {
  img:"/images/lamp.jpeg",
    title:"Modern Ceramic Table Lamp",
     description:"",
    oldPrice:89.99,
    newPrice:67.49

  },
  {
    img:"/images/pillow.jpeg",
    title:"Geometric Throw Pillow Set",
     description:"",
    oldPrice:45.99,
    newPrice:32.19
  },
  {
     
    img:"/images/painting.png",
    title:"Abstract Canvas Wall Art",
     description:"",
    oldPrice:129.99,
    newPrice:103.99
  },
  {
    img:"/images/vase.jpeg",
    title:"Contemporary Glass Vase",
    description:"",
    oldPrice:59.99,
    newPrice:50.99,
  }
]
}








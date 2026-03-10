import { Component } from '@angular/core';
import { ProductsDetail } from '../products-detail/products-detail';
import { CommonModule } from '@angular/common';

interface ProductsDesc {
  img: string[];
  title: string;
  description: string;
  features:string[];
  oldPrice: number;
  newPrice: number;
  discount:number
}

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductsDetail, CommonModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  productsList: ProductsDesc[] = [
    {
      img: ['/images/lamp.jpeg','/images/lamp.jpeg','/images/lamp.jpeg','/images/lamp.jpeg'],
      title: 'Modern Ceramic Table Lamp',
      description: 'Elegant white ceramic base with fabric shade',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 89.99,
      newPrice: 67.49,
    },
    {
      img: ['/images/pillow.jpeg','/images/lamp.jpeg','/images/painting.png','/images/vase.jpeg'],
      title: 'Geometric Throw Pillow Set',
      description: 'Set of 2 decorative pillows with modern patterns',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 45.99,
      newPrice: 32.19,
    },
    {
      img: ['/images/painting.png','/images/painting.png','/images/painting.png','/images/painting.png',],
      title: 'Abstract Canvas Wall Art',
      description: 'Modern abstract print on premium canvas',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 129.99,
      newPrice: 103.99,
    },
    {
      img: ['/images/vase.jpeg','/images/vase.jpeg','/images/vase.jpeg','/images/vase.jpeg',],
      title: 'Contemporary Glass Vase',
      description: 'Hand-blown glass vase with elegant curves',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 59.99,
      newPrice: 50.99,
      
    },
    {
      img: ['/images/clock.png','/images/clock.png','/images/clock.png','/images/clock.png'],
      title: 'Minimalist Wall Clock',
      description: 'Modern minimalist wall clock with a sleek metal frame',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 45.99,
      newPrice: 29.99,
    },
    {
      img: ['/images/boho wall hang.png','/images/boho wall hang.png','/images/boho wall hang.png','/images/boho wall hang.png'],
      title: 'Boho Wall Hanging',
      description: 'Beautiful macrame wall hanging made with soft cotton threads',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 54.99,
      newPrice: 36.19,
    },
    {
      img: ['/images/pot vase.png','/images/pot vase.png','/images/pot vase.png','/images/pot vase.png',],
      title: 'Decorative Indoor Plant Pot',
      description: 'Stylish geometric ceramic plant pot designed for indoor plants',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 34.99,
      newPrice: 21.99,
    },
    {
      img: ['/images/canvas wall art.png','/images/canvas wall art.png','/images/canvas wall art.png','/images/canvas wall art.png',],
      title: 'Abstract Canvas Wall Art',
      description: 'Premium abstract canvas painting featuring soft neutral colors',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 89.99,
      newPrice: 60.99,
    },
    {
      img: ['/images/candle.png','/images/candle.png','/images/candle.png','/images/candle.png',],
      title: 'Luxury Scented Candle',
      description: 'Aromatic scented candle in a frosted glass jar',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 29.99,
      newPrice: 17.49,
    },
    // {
    //   img: '/images/pillow.jpeg',
    //   title: 'Cozy Throw Blanket',
    //   description: 'Soft knitted throw blanket made from premium fabric',
    //   features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
    //   discount:25,
    //   oldPrice: 59.99,
    //   newPrice: 41.19,
    // },
    // {
    //   img: '/images/painting.png',
    //   title: 'Abstract Canvas Wall Art',
    //   features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
    //   discount:25,
    //   description: '',
    //   oldPrice: 129.99,
    //   newPrice: 103.99,
    // },
    // {
    //   img: '/images/vase.jpeg',
    //   title: 'Contemporary Glass Vase',
    //   description: '',
    //   features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
    //   discount:25,
    //   oldPrice: 59.99,
    //   newPrice: 50.99,
    // },
    // {
    //   img: '/images/lamp.jpeg',
    //   title: 'Modern Ceramic Table Lamp',
    //   description: '',
    //   features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
    //   discount:25,
    //   oldPrice: 89.99,
    //   newPrice: 67.49,
    // },
    // {
    //   img: '/images/pillow.jpeg',
    //   title: 'Geometric Throw Pillow Set',
    //   description: '',
    // features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
    //   discount:25,
    //   oldPrice: 45.99,
    //   newPrice: 32.19,
    // },
    // {
    //   img: '/images/painting.png',
    //   title: 'Abstract Canvas Wall Art',
    //   description: '',
    //   features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
    //   discount:25,
    //   oldPrice: 129.99,
    //   newPrice: 103.99,
    // },
    // {
    //   img: '/images/vase.jpeg',
    //   title: 'Contemporary Glass Vase',
    //   description: '',
    //   features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
    //   discount:25,
    //   oldPrice: 59.99,
    //   newPrice: 50.99,
    // },
    // {
    //   img: '/images/lamp.jpeg',
    //   title: 'Modern Ceramic Table Lamp',
    //   description: '',
    //   features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
    //   discount:25,
    //   oldPrice: 89.99,
    //   newPrice: 67.49,
    // },
    // {
    //   img: '/images/pillow.jpeg',
    //   title: 'Geometric Throw Pillow Set',
    //   description: '',
    //   features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
    //   discount:25,
    //   oldPrice: 45.99,
    //   newPrice: 32.19,
    // },
    // {
    //   img: '/images/painting.png',
    //   title: 'Abstract Canvas Wall Art',
    //   description: '',
    //   features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
    //   discount:25,
    //   oldPrice: 129.99,
    //   newPrice: 103.99,
    // },
    // {
    //   img: '/images/vase.jpeg',
    //   title: 'Contemporary Glass Vase',
    //   description: '',
    //   features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
    //   discount:25,
    //   oldPrice: 59.99,
    //   newPrice: 50.99,
    // },
    // {
    //   img: '/images/lamp.jpeg',
    //   title: 'Modern Ceramic Table Lamp',
    //   description: '',
    //   features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
    //   discount:25,
    //   oldPrice: 89.99,
    //   newPrice: 67.49,
    // },
    // {
    //   img: '/images/pillow.jpeg',
    //   title: 'Geometric Throw Pillow Set',
    //   description: '',
    //   features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
    //   discount:25,
    //   oldPrice: 45.99,
    //   newPrice: 32.19,
    // },
    // {
    //   img: '/images/painting.png',
    //   title: 'Abstract Canvas Wall Art',
    //   description: '',
    //   features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
    //   discount:25,
    //   oldPrice: 129.99,
    //   newPrice: 103.99,
    // },
    // {
    //   img: '/images/vase.jpeg',
    //   title: 'Contemporary Glass Vase',
    //   description: '',
    //   features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
    //   discount:25,
    //   oldPrice: 59.99,
    //   newPrice: 50.99,
    // },
  ];
  handleCartEvent(prod: any) {
    this.title = prod.title;
    this.newPrice = prod.newPrice;
    this.isShowPopUp = true;
  //   setTimeout(()=>{
  //     this.isShowPopUp=false
  //   },2000
  // )
  }
  isShowPopUp: boolean = false;
  title: string = '';
  newPrice: number = 0;
}

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
      img: ['/images/lamp.jpeg','/images/lamp 2.png','/images/lamp 3.png','/images/lamp 4.png'],
      title: 'Modern Ceramic Table Lamp',
      description: 'Elegant white ceramic base with fabric shade',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 89.99,
      newPrice: 67.49,
    },
    {
      img: ['/images/pillow.jpeg','/images/pillow 1.png','/images/pillow 2.png','/images/pillow 3.png'],
      title: 'Geometric Throw Pillow Set',
      description: 'Set of 2 decorative pillows with modern patterns',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 45.99,
      newPrice: 32.19,
    },
    {
      img: ['/images/painting.png','/images/painting 2.png','/images/painting 3.png','/images/painting 4.png',],
      title: 'Abstract Canvas Wall Art',
      description: 'Modern abstract print on premium canvas',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 129.99,
      newPrice: 103.99,
    },
    {
      img: ['/images/vase.jpeg','/images/vase 1.png','/images/vase 2.png','/images/vase 4.png',],
      title: 'Contemporary Glass Vase',
      description: 'Hand-blown glass vase with elegant curves',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 59.99,
      newPrice: 50.99,
      
    },
    {
      img: ['/images/clock.png','/images/clock_2.png','/images/clock_1.png','/images/clock_4.png'],
      title: 'Minimalist Wall Clock',
      description: 'Modern minimalist wall clock with a sleek metal frame',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 45.99,
      newPrice: 29.99,
    },
    {
      img: ['/images/boho_4.png','/images/boho_1.png','/images/boho_2.png','/images/boho_3.png'],
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
      img: ['/images/canvas wall art.png','/images/canvas_1.png','/images/canvas_2.png','/images/canvas_3.png',],
      title: 'Abstract Canvas Wall Art',
      description: 'Premium abstract canvas painting featuring soft neutral colors',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 89.99,
      newPrice: 60.99,
    },
    {
      img: ['/images/candle.png','/images/candle_2.png','/images/candle_3.png','/images/candle_4.png',],
      title: 'Luxury Scented Candle',
      description: 'Aromatic scented candle in a frosted glass jar',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 29.99,
      newPrice: 17.49,
    },
    {
      img: ['/images/curtain 1.png','/images/curtain 2.jpg','/images/curtain 1.png','/images/curtain 2.jpg'],
      title: 'Linen Curtain Panels',
      description: 'Soft off-white linen curtains filtering natural light in a cozy, living room',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 59.99,
      newPrice: 41.19,
    },
    {
      img: ['/images/shelf_1.jpg','/images/shelf_2.jpg','/images/shelf_3.jpg','/images/shelf_4.jpg'],
      title: 'Minimalist Wall Shelf',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      description: 'A sleek wall shelf ideal for displaying décor and essentials.',
      oldPrice: 129.99,
      newPrice: 103.99,
    },
    {
      img: ['/images/rug_1.jpg','/images/rug_2.jpg','/images/rug_3.jpg','/images/rug_4.jpg',],
      title: 'Cozy Area Rug',
      description: 'A soft and stylish rug that adds warmth and texture to any room.',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 59.99,
      newPrice: 50.99,
    },
    {
      img: ['/images/storage-basket_1.jpg','/images/storage-basket_2.jpg','/images/storage-basket_3.jpg','/images/storage-basket_4.jpg'],
      title: 'Woven Storage Basket',
      description: 'A practical woven basket that keeps your space neat and organized.',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 89.99,
      newPrice: 67.49,
    },
    {
      img: ['/images/tray_1.jpg','/images/tray_2.jpg','/images/tray_3.jpg','/images/tray_4.jpg'],
      title: 'Decorative Serving Tray',
      description: 'A stylish tray perfect for organizing décor or serving with elegance.',
    features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 45.99,
      newPrice: 32.19,
    },
    {
      img: ['/images/vase_1.png','/images/vase_2.png','/images/vase_3.png','/images/vase_4.png',],
      title: 'Modern Ceramic Vase',
      description: 'A simple yet elegant vase perfect for displaying flowers or greenery.',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 129.99,
      newPrice: 103.99,
    },
    {
      img: ['/images/table-sculpture_1.jpg','/images/table-sculpture_3.jpg','/images/table-sculpture_2.jpg','/images/table-sculpture_4.jpg',],
      title: 'Modern Table Sculpture',
      description:'A decorative sculpture that adds artistic elegance to your table.',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 59.99,
      newPrice: 50.99,
    },
    {
      img: ['/images/artificial-plant_1.jpg','/images/artificial-plant_2.jpg','/images/artificial-plant_3.jpg','/images/artificial-plant_4.jpg',],
      title: 'Artificial Indoor Plant',
      description: 'A realistic artificial plant that adds greenery without maintenance.',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 89.99,
      newPrice: 67.49,
    },
    {
      img: ['/images/diffuser_1.jpg','/images/diffuser_2.jpg','/images/diffuser_3.jpg','/images/diffuser_4.jpg',],
      title: 'Aromatherapy Diffuser',
      description: 'A stylish diffuser that fills your room with calming and refreshing scents.',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 45.99,
      newPrice: 32.19,
    },
    {
      img: ['/images/lantern_1.jpg','/images/lantern_2.jpg','/images/lantern_3.jpg','/images/lantern_4.jpg',],
      title: 'Abstract Canvas Wall Art',
      description: 'Premium abstract canvas painting featuring soft neutral colors',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 129.99,
      newPrice: 103.99,
    },
    {
      img:[ '/images/vase 1.png','/images/vase 2.png','/images/vase 3.png','/images/vase 4.png',],
      title: 'Modern Ceramic Vase',
      description: 'A simple yet elegant vase perfect for displaying flowers or greenery.',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 59.99,
      newPrice: 50.99,
    },
    {
      img: ['/images/mirror_1.jpg','/images/mirror_2.jpg','/images/mirror_3.jpg','/images/mirror_4.jpg',],
      title: 'Decorative Wall Mirror',
      description: 'A stylish wall mirror that enhances light and adds depth to your space.',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 89.99,
      newPrice: 67.49,
    },
    {
      img: ['/images/photo-frame_4.jpg','/images/photo-frame_2.jpg','/images/photo-frame_3.jpg','/images/photo-frame_4.jpg',],
      title: 'Elegant Photo Frame',
      description: 'A classic photo frame designed to beautifully display your cherished memories.',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 45.99,
      newPrice: 32.19,
    },
    {
      img: ['/images/hanging_plant_1.jpg','/images/hanging_plant_2.jpg','/images/hanging_plant_3.jpg','/images/hanging_plant_4.jpg',],
      title: 'Decorative Hanging Plant',
      description: 'A stylish hanging plant that brings natural charm and freshness to any room.',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 129.99,
      newPrice: 103.99,
    },
    {
      img: ['/images/desk-clock_1.jpg','/images/desk-clock_2.jpg','/images/desk-clock_3..jpg','/images/desk-clock_4.jpg',],
      title: 'Minimalist Desk Clock',
      description: 'A sleek desk clock that adds a modern touch while keeping time in style.',
      features:['Premium ceramic construction','Waterproof and easy to clean','Perfect for fresh or dried flowers','Dimensions: 12" H x 6" W'],
      discount:25,
      oldPrice: 59.99,
      newPrice: 50.99,
    },
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

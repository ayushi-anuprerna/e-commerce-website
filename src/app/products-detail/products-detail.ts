import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-products-detail',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './products-detail.html',
  styleUrl: './products-detail.css',
})
export class ProductsDetail {
@Input() products!:any
}





//home -->product list-->product detail
//products list-->products detail
//nav br --products list --line 27
//home-->product list
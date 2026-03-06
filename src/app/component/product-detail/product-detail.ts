import { Component } from '@angular/core';
import { Url } from 'url';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})

export class ProductDetail {
 @Input() product!:any //! means it is optional(data that is coming)

}

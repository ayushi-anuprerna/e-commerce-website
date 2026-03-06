import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ProductList,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

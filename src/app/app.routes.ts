import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Login } from './component/login/login';
import { Cart } from './component/cart/cart';
import { ProductDetail } from './component/product-detail/product-detail';
import { ProductList } from './component/product-list/product-list';
import { ProductsList } from './component/products-list/products-list';
import { ProductInfo } from './component/product-info/product-info';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"login",component:Login},
    {path:"cart",component:Cart},
    {path:"productDetail",component:ProductDetail},
    {path:"productList",component:ProductList},
    {path:"productsList",component:ProductsList},
    {path:"product-info/:title",component:ProductInfo}



];

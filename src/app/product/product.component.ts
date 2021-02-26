import { Product } from './shared/product.model';
import { ProductService } from './shared/product.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private title: Title, private productservice: ProductService) { }

  ngOnInit(): void {
    this.title.setTitle('Product');
    this.productservice.getProduct().subscribe((res) =>{
      console.log(res);
    this.products = res;
    })
  }

}

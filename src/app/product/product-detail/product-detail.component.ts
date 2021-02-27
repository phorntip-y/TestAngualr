import { ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: any;
  titel: any;
  detail: any[] = [];
  constructor(private rout: ActivatedRoute, private productservice: ProductService) {

  }

  ngOnInit(): void {
    this.id = this.rout.snapshot.paramMap.get('id');
    this.titel = this.rout.snapshot.paramMap.get('title');
    this.productservice.getProductDetail(this.id,this.titel).subscribe((data: any[])=>{
      console.log(data);
      this.detail = data;
    })

  }

}

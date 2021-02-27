import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = 'https://codingthailand.com/api/get_courses.php';
  productDetailUrl = 'https://codingthailand.com/api/get_course_detail.php';
  constructor(private http: HttpClient) { }
  getProduct(): Observable<Product[]>{
      return this.http.get<Product[]>(this.productUrl);
  }
  getProductDetail(id: any,titel: any): Observable<any[]>{
    const myparams = {
      course_id: id,
      title: titel
    };
    return this.http.get<any[]>(this.productDetailUrl, {params: myparams});
  }
}

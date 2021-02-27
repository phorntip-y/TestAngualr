import { NewsComponent } from './news/news.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'product',component: ProductComponent},
  {path: 'product/:id/:title',component: ProductDetailComponent},
  {path: 'news',component: NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

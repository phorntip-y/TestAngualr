import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ProductDetailComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

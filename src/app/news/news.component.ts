import { from } from 'rxjs';
import { NewsService } from './shared/news.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { News, Article } from './shared/news.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {
  article: Article[] = [];
  listnews: News | undefined;
  total: number | undefined;
  sub: Subscription | undefined;
  isloading = true;
  constructor(private newsservice: NewsService) { }


  ngOnInit(): void {
    this.getNews();
  }
  getNews() {
    this.sub = this.newsservice.getNews().subscribe((data: News) => {
      // console.log(data);
      this.article = data.articles;
      this.total = data.totalResults;
    }, (error) => {
      console.log(error);
    }, () => {
     this.isloading = false;
    });

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub?.unsubscribe();

  }

}

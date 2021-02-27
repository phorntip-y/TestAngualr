import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsurl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7bd2f87ea8dc4e0b8d68f3be9a4284bb';
  constructor(private http: HttpClient) { }

  getNews(): Observable<News> {
    const param = {

    }
return this.http.get<News>(this.newsurl);
  }
}

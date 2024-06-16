// article.service.ts
import { Injectable } from '@angular/core';
import { Article } from '../app/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    {
      publishedAt: '2023-10-11T00:00:00Z',
      title: 'How learning different frameworks made me an expert in one',
      description: 'This is article 1',
      url: 'https://example.com/article-1',
      urlToImage: 'https://example.com/article-1.jpg',
      content: 'This is the content of article 1',
      source: {
        id: '1',
        name: 'Source 1',
      },
    },
    {
      publishedAt: '2023-10-12T00:00:00Z',
      title: 'This is an article about JS or CSS',
      description: 'This is article 2',
      url: 'https://example.com/article-2',
      urlToImage: 'https://example.com/article-2.jpg',
      content: 'This is the content of article 2',
      source: {
        id: '2',
        name: 'Source 2',
      },
    },
    {
      publishedAt: '2023-10-13T00:00:00Z',
      title: 'Another article about JS or CSS',
      description: 'This is article 3',
      url: 'https://example.com/article-3',
      urlToImage: 'https://example.com/article-3.jpg',
      content: 'This is the content of article 3',
      source: {
        id: '3',
        name: 'Source 3',
      },
    },
  ];

  getArticles() {
    return this.articles;
  }

  getArticle(id: string) {
    return this.articles.find((article) => article.source.id === id);
  }
}

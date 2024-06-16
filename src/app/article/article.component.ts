import { Component } from '@angular/core';
import { Article } from '../article';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  article: Article = {
    publishedAt: '2021-10-11T00:00:00Z',
    title: 'Article 1',
    description: 'This is article 1',
    url: 'https://example.com/article-1',
    urlToImage: 'https://example.com/article-1.jpg',
    content: 'This is the content of article 1',
    source: {
      id: '1',
      name: 'Source 1',
    },
  };
}

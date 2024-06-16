import { Component } from '@angular/core';
import { Article } from '../article';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent {
  constructor(private route: ActivatedRoute) {}

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
      title: 'Another',
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
}

import { Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';

export const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'article', component: ArticleComponent },
];

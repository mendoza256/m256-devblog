export interface Article {
  publishedAt: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  content: string;
  source: {
    id: string;
    name: string;
  };
}

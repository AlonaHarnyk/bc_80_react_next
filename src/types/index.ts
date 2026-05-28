export interface Book {
  author: string;
  title: string;
  year: number;
  description: string;
  id: string;
}

export type TabVariant = 'users' | 'books';

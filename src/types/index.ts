export interface Book {
  author: string;
  title: string;
  year: number;
  description: string;
  id: string;
}

export type TabVariant = 'users' | 'books';

export interface User {
  name: string;
  email: string;
  isOnline: boolean;
  id: string;
}

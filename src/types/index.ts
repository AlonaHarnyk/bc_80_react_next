export interface Book {
  author: string;
  title: string;
  year: number;
  description: string;
  id: string;
}
export interface BookData {
  author: string;
  title: string;
  year: number;
  description: string;
}

export type TabVariant = 'users' | 'books' | 'contact';

export interface User {
  name: string;
  email: string;
  isOnline: boolean;
  id: string;
}

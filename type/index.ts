export interface Book {
  author: string;
  title: string;
  year: number;
  description: string;
  id: string;
}

export interface User {
  name: string;
  email: string;
  isOnline: boolean;
  id: string;
}

export interface Contact {
  id: string;
  email: string;
  name: string;
  hasWork: boolean
}

export interface UserDraft {
  name: string;
  email: string
}
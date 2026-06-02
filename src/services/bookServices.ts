import axios from 'axios';
import type { Book, BookData } from '../types';
axios.defaults.baseURL = 'https://6971cf4a32c6bacb12c49096.mockapi.io';

export const getBooks = async (page: number, query: string): Promise<Book[]> => {
  const { data } = await axios.get<Book[]>('/books', {
    params: { page, limit: 5, search: query },
  });

  return data;
};

export const addBook = async (bookData: BookData): Promise<Book> => {
  const { data } = await axios.post<Book>('/books', bookData);
  return data;
};

export const deleteBook = async (id: Book['id']): Promise<Book> => {
  const { data } = await axios.delete<Book>(`/books/${id}`);
  return data;
}

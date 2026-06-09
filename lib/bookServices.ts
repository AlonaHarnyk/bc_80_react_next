import { Book } from '@/type';
import axios from 'axios';
// https://6971cf4a32c6bacb12c49096.mockapi.io/

const bookApi = axios.create({
  baseURL: 'https://6971cf4a32c6bacb12c49096.mockapi.io/',
});

export async function fetchBooks(): Promise<Book[]> {
  const { data } = await bookApi.get<Book[]>('/books');
  return data;
}

export async function getBookById(bookId: Book['id']): Promise<Book> {
  const { data } = await bookApi.get<Book>(`/books/${bookId}`);

  return data;
}

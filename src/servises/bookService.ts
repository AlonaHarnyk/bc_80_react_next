import axios from 'axios';
import type { Book } from '../types';
axios.defaults.baseURL = 'https://6971cf4a32c6bacb12c49096.mockapi.io';
export const getBooks = async (): Promise<Book[]> => {
  const { data } = await axios.get<Book[]>('/books');
  return data;
};

// https://6971cf4a32c6bacb12c49096.mockapi.io/books

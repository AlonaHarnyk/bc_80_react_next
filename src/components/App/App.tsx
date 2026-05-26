// import { useEffect } from "react";
import { useEffect, useState } from 'react';
import { getBooks } from '../../servises/bookService';
import type { Book } from '../../types';
import BooksList from '../BooksList/BooksList';

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    getBooks().then(data => {
      setBooks(data);
    });
  }, []);

  return <BooksList books={books} />;
}

// При монтуванні компонента App має виконувати запит
// за ендпоінтом https://6971cf4a32c6bacb12c49096.mockapi.io/books.

// На підставі отриманих даних відрендерити список книг.
// Кожен елемент списку має містити інформацію про назву книги, автора, рік видання.

import type { Book } from '../../types';
import BookItem from '../BookItem/BookItem';

interface BooksListProps {
  books: Book[];
}
export default function BooksList({ books }: BooksListProps) {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <BookItem book={book} />
        </li>
      ))}
    </ul>
  );
}
// "author": "author 94",
// "title": "title 94",
// "year": 64,

import type { Book } from '../../types';
import BookItem from '../BookItem/BookItem';
import Button from '../Button/Button';

interface BooksListProps {
  books: Book[];
  onShowModal: (description: string) => void;
}
export default function BooksList({ books, onShowModal }: BooksListProps) {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <Button
            title="View description"
            clickHandler={() => onShowModal(book.description)}
          />
          <BookItem book={book} />
        </li>
      ))}
    </ul>
  );
}

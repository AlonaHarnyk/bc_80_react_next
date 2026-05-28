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
          <Button title="View description" clickHandler={() => onShowModal(book.description)} />
          <BookItem book={book} />
        </li>
      ))}
    </ul>
  );
}
// "author": "author 94",
// "title": "title 94",
// "year": 64,

// До кожного елемента списку додати кнопку View description, при натисканні на яку має відкриватись модальне
// вікно з описом, яка має закриватись кпопкою Close, клавішею Esc, а також клікои по бекдропу

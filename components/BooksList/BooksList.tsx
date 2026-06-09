import { Book } from '@/type';

interface BooksListProps {
  books: Book[];
}
export default function BooksList({ books }: BooksListProps) {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <p>title:{book.title}</p>
          <p>author:{book.author}</p>
          <p>year:{book.year}</p>
          <p>description:{book.description}</p>
        </li>
      ))}
    </ul>
  );
}

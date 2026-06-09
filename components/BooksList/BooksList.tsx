import { Book } from '@/type';
import Link from 'next/link';

interface BooksListProps {
  books: Book[];
}
export default function BooksList({ books }: BooksListProps) {
  return (
    <ul>
      {books.map(({ id, title }) => (
        <li key={id}>
          <Link href={`/books/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

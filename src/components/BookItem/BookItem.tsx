import type { Book } from '../../types';

interface BookItemProps {
  book: Book;
}
export default function BookItem({ book: { author, title, year } }: BookItemProps) {
  return (
    <>
      <p>Author: {author}</p>
      <p>Title: {title}</p>
      <p>Year: {year}</p>
    </>
  );
}

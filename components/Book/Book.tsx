import type { Book } from '@/type';

interface BookProps {
  book: Book;
}

export default function BookDetails({ book }: BookProps) {
  return (
    <>
      <p>title:{book.title}</p>
      <p>author:{book.author}</p>
      <p>year:{book.year}</p>
      <p>description:{book.description}</p>
    </>
  );
}

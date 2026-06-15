import BooksList from '@/components/BooksList/BooksList';
import { fetchBooks } from '@/lib/bookServices';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Books',
  description: 'List of books'
}

export default async function Books() {
  const books = await fetchBooks();
  return (
    <>
      <p>Books</p>
      <BooksList books={books} />
    </>
  );
}

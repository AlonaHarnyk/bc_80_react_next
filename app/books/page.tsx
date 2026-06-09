import BooksList from '@/components/BooksList/BooksList';
import { fetchBooks } from '@/lib/bookServices';

export default async function Books() {
  const books = await fetchBooks();
  return (
    <>
      <p>Books</p>
      <BooksList books={books} />
    </>
  );
}

import BookDetails from '@/components/Book/Book';
import { getBookById } from '@/lib/bookServices';

interface BookDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function BookDetailsPage({
  params,
}: BookDetailsPageProps) {
  const { id } = await params;

  const book = await getBookById(id);

  return <BookDetails book={book} />;
}

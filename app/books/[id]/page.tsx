import BookDetails from '@/components/Book/Book';
import { getBookById } from '@/lib/bookServices';
import { Metadata } from 'next';

interface BookDetailsPageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: BookDetailsPageProps): Promise<Metadata> => {
  const { id } = await params;
  const book = await getBookById(id);

  return { title: book.title, description: book.description };
};

export default async function BookDetailsPage({
  params,
}: BookDetailsPageProps) {
  const { id } = await params;

  const book = await getBookById(id);

  return <BookDetails book={book} />;
}

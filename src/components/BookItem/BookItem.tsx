import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Book } from '../../types';
import Button from '../Button/Button';
import { deleteBook } from '../../services/bookServices';

interface BookItemProps {
  book: Book;
}
export default function BookItem({
  book: { author, title, year, id },
}: BookItemProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteBook,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });

  const handleDelete = () => {
    mutate(id);
  };
  return (
    <>
      <p>Author: {author}</p>
      <p>Title: {title}</p>
      <p>Year: {year}</p>
      <Button title="Delete" clickHandler={handleDelete} />
    </>
  );
}

// Додати компоненту BookItem кнопку видалення, при натисканні
// на яку елемент має видалятись (реалізувати відповідний запит)

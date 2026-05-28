// import { useEffect } from "react";
import { useState } from 'react';
import { getBooks } from '../../servises/bookService';
import BooksList from '../BooksList/BooksList';
import Loading from '../Loading/Loading';
import ErrorNotification from '../ErrorNotification/ErrorNotification';
import Modal from '../Modal/Modal';
import { useQuery } from '@tanstack/react-query';

export default function Books() {
  const [description, setDescription] = useState('');

  const {
    data: books,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
  });

  const onShowModal = (bookDescription: string) => {
    setDescription(bookDescription);
  };
  const onClose = () => {
    setDescription('');
  };

  return (
    <>
      {isLoading && <Loading />}
      {books && books.length > 0 && <BooksList books={books} onShowModal={onShowModal} />}

      {isError && <ErrorNotification />}
      {description.trim().length > 0 && (
        <Modal onClose={onClose}>
          <p>{description} </p>
        </Modal>
      )}
    </>
  );
}

// Порефакторити запит за книжками таким чином, щоб він відбувався з використанням хука useQuery.

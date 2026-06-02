// import { useEffect } from "react";
import { useState } from 'react';
import { getBooks } from '../../services/bookServices';
import BooksList from '../BooksList/BooksList';
import Loading from '../Loading/Loading';
import ErrorNotification from '../ErrorNotification/ErrorNotification';
import Modal from '../Modal/Modal';
import { useQuery } from '@tanstack/react-query';
import Pagination from '../Pagination/Pagination';
import AddBookForm from '../AddBookForm/AddBookForm';
import SearchBookForm from '../SearchBookForm/SearchBookForm';
import { useDebouncedCallback } from 'use-debounce';

export default function Books() {
  const [description, setDescription] = useState('');
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const handleChange = useDebouncedCallback((query) => {
    setQuery(query);
    setPage(1)

  }, 2000);

  const {
    data: books,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['books', page, query],
    queryFn: () => getBooks(page, query),
  });

  const onShowModal = (bookDescription: string) => {
    setDescription(bookDescription);
  };
  const onClose = () => {
    setDescription('');
  };

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  return (
    <>
      {/* <AddBookForm /> */}
      <SearchBookForm setQuery={handleChange} query={query} />
      {isLoading && <Loading />}
      <Pagination
        totalPages={8}
        currentPage={page}
        onPageChange={handleChangePage}
      />
      {books && books.length > 0 && (
        <BooksList books={books} onShowModal={onShowModal} />
      )}

      {isError && <ErrorNotification />}
      {description.trim().length > 0 && (
        <Modal onClose={onClose}>
          <p>{description} </p>
        </Modal>
      )}
    </>
  );
}

// Додати пагінацію для запиту по книжкам з використанням бібліотеки
// react-paginate (загальну кількість елементів захардкодити як 36)

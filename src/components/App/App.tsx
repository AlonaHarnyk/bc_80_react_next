// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { getBooks } from "../../servises/bookService";
import type { Book } from "../../types";
import BooksList from "../BooksList/BooksList";
import Loading from "../Loading/Loading";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
import Modal from "../Modal/Modal";

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const result = await getBooks();
        setBooks(result);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const onShowModal = (bookDescription: string) => {
    setDescription(bookDescription);
  };
  const onClose = () => {
    setDescription("");
  };

  return (
    <>
      {isLoading && <Loading />}
      <BooksList books={books} onShowModal={onShowModal} />

      {isError && <ErrorNotification />}
      {description.trim().length > 0 && (
        <Modal onClose={onClose}>
          <p>{description} </p>
        </Modal>
      )}
    </>
  );
}

// При монтуванні компонента App має виконувати запит
// за ендпоінтом https://6971cf4a32c6bacb12c49096.mockapi.io/books.

// На підставі отриманих даних відрендерити список книг.
// Кожен елемент списку має містити інформацію про назву книги, автора, рік видання.

// До кожного елемента списку додати кнопку View description, при натисканні на яку має відкриватись модальне
// вікно з описом, яка має закриватись кпопкою Close, клавішею Esc, а також клікои по бекдропу

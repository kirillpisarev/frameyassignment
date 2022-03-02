import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from '~/api/types';
import { getRandomBooks } from '~/redux/books/actions';
import { randomBooksSelector } from '~/redux/books/selectors';
import { BooksList } from '~/screens/Discover/components/BooksList';

export const DiscoverScreen = () => {
  const dispatch = useDispatch();
  const randomBooks = useSelector(randomBooksSelector);

  useEffect(() => {
    dispatch(getRandomBooks.started());
  }, [dispatch]);

  const onBookPress = useCallback((book: Book) => {
    console.log('%c >>> book', 'background: #ff6347', book);
  }, []);

  return <BooksList books={randomBooks} onBookPress={onBookPress} />;
};

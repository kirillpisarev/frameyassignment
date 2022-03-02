import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from '~/api/types';
import { RootStackParamList } from '~/navigation/types';
import { getRandomBooks, searchBooks } from '~/redux/books/actions';
import {
  randomBooksSelector,
  searchBooksSelector,
  searchQuerySelector,
} from '~/redux/books/selectors';
import { BooksList } from '~/screens/Discover/components/BooksList';
import { SearchInput } from '~/screens/Discover/components/SearchInput';

export const DiscoverScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'DISCOVER'>) => {
  const dispatch = useDispatch();
  const randomBooksList = useSelector(randomBooksSelector);
  const searchBooksList = useSelector(searchBooksSelector);
  const searchQuery = useSelector(searchQuerySelector);
  const books = searchQuery ? searchBooksList : randomBooksList;

  useEffect(() => {
    dispatch(getRandomBooks.started());
  }, [dispatch]);

  const onBookPress = useCallback(
    (book: Book) => {
      navigation.navigate('BOOK', { book });
    },
    [navigation],
  );

  const onSearchSubmit = useCallback(
    (query: string) => {
      dispatch(searchBooks.started({ query }));
    },
    [dispatch],
  );

  return (
    <>
      <SearchInput onSearchSubmit={onSearchSubmit} />
      <BooksList books={books} onBookPress={onBookPress} />
    </>
  );
};

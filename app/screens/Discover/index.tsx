import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from '~/api/types';
import { RootStackParamList } from '~/navigation/types';
import { getRandomBooks, searchBooks } from '~/redux/books/actions';
import { randomBooksSelector, searchBooksSelector } from '~/redux/books/selectors';
import { BooksList } from '~/screens/Discover/components/BooksList';
import { Loading } from '~/screens/Discover/components/Loading';
import { SearchInput } from '~/screens/Discover/components/SearchInput';

export const DiscoverScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'DISCOVER'>) => {
  const dispatch = useDispatch();
  const { list: randomBooksList, loading: randomBooksLoading } = useSelector(randomBooksSelector);
  const {
    list: searchBooksList,
    query: searchQuery,
    loading: searchBooksLoading,
  } = useSelector(searchBooksSelector);
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
      {randomBooksLoading || searchBooksLoading ? (
        <Loading />
      ) : (
        <BooksList books={books} onBookPress={onBookPress} />
      )}
    </>
  );
};

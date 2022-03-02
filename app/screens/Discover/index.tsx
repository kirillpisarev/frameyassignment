import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from '~/api/types';
import { RootStackParamList } from '~/navigation/types';
import { getRandomBooks } from '~/redux/books/actions';
import { randomBooksSelector } from '~/redux/books/selectors';
import { BooksList } from '~/screens/Discover/components/BooksList';

export const DiscoverScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'DISCOVER'>) => {
  const dispatch = useDispatch();
  const randomBooks = useSelector(randomBooksSelector);

  useEffect(() => {
    dispatch(getRandomBooks.started());
  }, [dispatch]);

  const onBookPress = useCallback(
    (book: Book) => {
      navigation.navigate('BOOK', { book });
    },
    [navigation],
  );

  return <BooksList books={randomBooks} onBookPress={onBookPress} />;
};

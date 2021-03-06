import React, { useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Book } from '~/api/types';
import { BookItem } from '~/screens/Discover/components/BookItem';

type Props = {
  onBookPress: (post: Book) => void;
  books: Book[];
};

export const BooksList = ({ onBookPress, books }: Props) => {
  const renderItem = useCallback(
    ({ item }: { item: Book }) => <BookItem book={item} onBookPress={onBookPress} />,
    [onBookPress],
  );

  return (
    <FlatList
      style={styles.wrapper}
      data={books}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListEmptyComponent={ListEmptyComponent}
      keyExtractor={keyExtractor}
    />
  );
};

const keyExtractor = (item: Book) => item.id;

const ItemSeparatorComponent = () => <View style={styles.separator} />;

const ListEmptyComponent = () => <Text style={styles.noResultsText}>Oops! Nothing Found...</Text>;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#d3d3d3',
  },
  noResultsText: {
    marginTop: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});

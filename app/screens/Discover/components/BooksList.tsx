import React, { useCallback } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Book } from '~/api/types';

type Props = {
  onBookPress: (post: Book) => void;
  books: Book[];
};

export const BooksList = ({ onBookPress, books }: Props) => {
  const renderItem = useCallback(
    ({ item }: { item: Book }) => {
      return (
        <TouchableOpacity onPress={() => onBookPress(item)}>
          <View style={styles.itemWrapper}>
            {!!item.coverImageUrl && (
              <Image
                style={styles.thumbnail}
                source={{ uri: item.coverImageUrl }}
                resizeMode={'contain'}
              />
            )}
            <View style={styles.body}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.authorText}>{item.author}</Text>
              <Text style={styles.publisherText}>
                {item.publisher} {item.pageCount}📖
              </Text>
              <Text style={styles.synopsisText} numberOfLines={5}>
                {item.synopsis}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    },
    [onBookPress],
  );

  return (
    <FlatList
      style={styles.wrapper}
      data={books}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
      keyExtractor={keyExtractor}
    />
  );
};

const keyExtractor = (item: Book) => item.id;

const ItemSeparatorComponent = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  itemWrapper: {
    flexDirection: 'row',
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#d3d3d3',
  },
  thumbnail: {
    width: 90,
    height: 135,
    marginRight: 6,
  },
  body: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  authorText: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  publisherText: {
    fontSize: 12,
  },
  synopsisText: {
    marginTop: 12,
    fontSize: 12,
  },
});

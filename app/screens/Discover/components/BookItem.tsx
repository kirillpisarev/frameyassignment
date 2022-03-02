import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Book } from '~/api/types';

export const BookItem = React.memo(
  ({ book, onBookPress }: { book: Book; onBookPress: (book: Book) => void }) => {
    return (
      <TouchableOpacity onPress={() => onBookPress(book)}>
        <View style={styles.bookWrapper}>
          {!!book.coverImageUrl && (
            <Image
              style={styles.thumbnail}
              source={{ uri: book.coverImageUrl }}
              resizeMode={'contain'}
            />
          )}
          <View style={styles.body}>
            <Text style={styles.titleText}>{book.title}</Text>
            <Text style={styles.authorText}>{book.author}</Text>
            <Text style={styles.publisherText}>
              {book.publisher} {book.pageCount}📖
            </Text>
            <Text style={styles.synopsisText} numberOfLines={5}>
              {book.synopsis}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  bookWrapper: {
    flexDirection: 'row',
    marginVertical: 16,
    paddingHorizontal: 16,
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

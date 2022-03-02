import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, ScrollView } from 'react-native';
import { RootStackParamList } from '~/navigation/types';

const { width } = Dimensions.get('window');

export const BookScreen = ({ route }: StackScreenProps<RootStackParamList, 'BOOK'>) => {
  const book = route.params.book;
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      {!!book.coverImageUrl && (
        <Image
          style={styles.thumbnail}
          source={{ uri: book.coverImageUrl }}
          resizeMode={'contain'}
        />
      )}
      <Text style={styles.titleText}>{book.title}</Text>
      <Text style={styles.authorText}>{book.author}</Text>
      <Text style={styles.publisherText}>
        {book.publisher} {book.pageCount}📖
      </Text>
      <Text style={styles.synopsisText}>{book.synopsis}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
  },
  thumbnail: {
    width: width / 1.5,
    height: width,
    alignSelf: 'center',
  },
  titleText: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: 'bold',
  },
  authorText: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  publisherText: {
    fontSize: 14,
  },
  synopsisText: {
    marginTop: 12,
    fontSize: 14,
  },
});

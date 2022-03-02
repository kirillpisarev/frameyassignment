import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input } from '~/components/Input';

export const SearchInput = ({ onSearchSubmit }: { onSearchSubmit: (query: string) => void }) => {
  const [query, setQuery] = useState('');
  const onSubmitEditing = () => {
    onSearchSubmit(query);
  };

  return (
    <Input
      placeholder={'Search...'}
      onChangeText={setQuery}
      onSubmitEditing={onSubmitEditing}
      returnKeyType={'search'}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 6,
    marginHorizontal: 16,
  },
});

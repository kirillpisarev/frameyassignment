import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const HeaderButton = ({ onPress, title }: { onPress: () => void; title: string }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginHorizontal: 16,
    color: '#b23b3b',
  },
});

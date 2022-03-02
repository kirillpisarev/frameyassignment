import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

export const Link = (props: TouchableOpacityProps & { title: string }) => {
  const { title, ...buttonProps } = props;
  return (
    <TouchableOpacity {...buttonProps}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'rgb(63, 81, 181)',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

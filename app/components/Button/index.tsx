import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

export const Button = (props: TouchableOpacityProps & { title: string }) => {
  const { style, title, ...buttonProps } = props;
  return (
    <TouchableOpacity style={[styles.button, style]} {...buttonProps}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(63, 81, 181)',
    paddingHorizontal: 6,
    paddingVertical: 16,
    borderRadius: 4,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

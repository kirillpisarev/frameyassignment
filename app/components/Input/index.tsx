import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

export const Input = (props: TextInputProps & { label?: string }) => {
  const { style, label, ...inputProps } = props;

  return (
    <View style={[styles.wrapper, style]}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} {...inputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  label: {
    fontSize: 16,
  },
  input: {
    backgroundColor: 'rgb(241, 242, 247)',
    paddingHorizontal: 6,
    paddingVertical: 12,
    borderRadius: 4,
  },
});

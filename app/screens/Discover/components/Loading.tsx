import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const Loading = () => (
  <View style={styles.wrapper}>
    <ActivityIndicator />
  </View>
);

const styles = StyleSheet.create({
  wrapper: { flex: 1, justifyContent: 'center' },
});

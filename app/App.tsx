import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { RootStack } from '~/navigation';
import { ReduxProvider } from '~/redux/redux-provider';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ReduxProvider>
        <NavigationContainer theme={Theme}>
          <RootStack />
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
});

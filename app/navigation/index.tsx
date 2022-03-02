import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { isAuthenticatedSelector } from '~/redux/user/selectors';
import { HomeScreen } from '~/screens/Home';
import { SplashScreen } from '~/screens/Splash';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  if (isAuthenticated == null) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name="HOME"
        options={{ headerShown: false, title: 'Home' }}
      />
    </Stack.Navigator>
  );
};

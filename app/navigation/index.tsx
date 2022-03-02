import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from '~/screens/Home';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={HomeScreen}
      name="HOME"
      options={{ headerShown: false, title: 'Home' }}
    />
  </Stack.Navigator>
);

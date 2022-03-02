import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appLoaded } from '~/redux/app/actions';
import { isAuthenticatedSelector, isRehydratedSelector } from '~/redux/user/selectors';
import { BookScreen } from '~/screens/Book';
import { DiscoverScreen } from '~/screens/Discover';
import { SignInScreen } from '~/screens/SignIn';
import { SignUpScreen } from '~/screens/SignUp';
import { SplashScreen } from '~/screens/Splash';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appLoaded());
  }, [dispatch]);

  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const isRehydrated = useSelector(isRehydratedSelector);

  if (!isRehydrated) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen component={DiscoverScreen} name="DISCOVER" />
          <Stack.Screen component={BookScreen} name="BOOK" />
        </>
      ) : (
        <>
          <Stack.Screen
            component={SignInScreen}
            name="SIGN_IN"
            options={{ headerShown: false, title: 'Sign In' }}
          />
          <Stack.Screen component={SignUpScreen} name="SIGN_UP" options={{ title: 'Sign Up' }} />
        </>
      )}
    </Stack.Navigator>
  );
};

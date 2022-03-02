import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { signUp } from '~/redux/user/actions';

export const SignInScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      signUp.started({
        username: 'kuku1',
        password: 'kuku',
      }),
    );
  }, [dispatch]);

  return <View style={styles.wrapper} />;
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
});

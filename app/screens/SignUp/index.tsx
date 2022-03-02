import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { signUp } from '~/redux/user/actions';

export const SignUpScreen = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignUpPress = () => {
    dispatch(signUp.started({ username, password }));
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View>
        <Input
          style={styles.input}
          label={'Username'}
          value={username}
          onChangeText={setUsername}
        />
        <Input
          style={styles.input}
          label={'Password'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title={'Sign Up'} onPress={onSignUpPress} style={styles.button} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  input: {
    marginTop: 16,
  },
  button: {
    marginTop: 20,
  },
});

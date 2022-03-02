import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { Link } from '~/components/Link';
import { RootStackParamList } from '~/navigation/types';
import { signIn } from '~/redux/user/actions';

export const SignInScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'SIGN_IN'>) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPress = () => {
    dispatch(signIn.started({ username, password }));
  };

  const onSignUpPress = () => {
    navigation.navigate('SIGN_UP');
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View>
        <Text style={styles.title}>Weclome to Book discovery</Text>
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
        <Button title={'Sign in'} onPress={onSignInPress} style={styles.button} />
        <Link title={'Register now'} onPress={onSignUpPress} style={styles.link} />
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
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  input: {
    marginTop: 16,
  },
  button: {
    marginTop: 20,
  },
  link: {
    marginTop: 20,
  },
});

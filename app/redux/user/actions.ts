import actionCreatorFactory from 'typescript-fsa';
import { User } from '~/api/types';

const actionCreator = actionCreatorFactory('@@user');

export const signIn = actionCreator.async<{ username: string; password: string }, User, unknown>(
  'SIGN_IN',
);

export const signUp = actionCreator.async<{ username: string; password: string }, User, unknown>(
  'SIGN_UP',
);

export const signOut = actionCreator.async<void, void, unknown>('SIGN_OUT');

export const rehydrate = actionCreator<{ token: string } | null>('REHYDRATE');

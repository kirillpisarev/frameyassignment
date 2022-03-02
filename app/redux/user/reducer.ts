import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { User } from '~/api/types';
import { rehydrate, signIn, signOut, signUp } from '~/redux/user/actions';

export type UserState = {
  rehydrated: boolean;
  data: User | null;
};

const initialState: UserState = {
  rehydrated: false,
  data: null,
};

export const userReducer = reducerWithInitialState(initialState)
  .case(rehydrate, (state) => ({
    ...state,
    rehydrated: true,
  }))
  .case(signUp.done, (state, { result }) => ({
    ...state,
    data: result,
  }))
  .case(signIn.done, (state, { result }) => ({
    ...state,
    data: result,
  }))
  .case(signOut.done, (state) => ({
    ...state,
    data: null,
  }));

import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { rehydrate } from '~/redux/user/actions';

export type UserState = {
  rehydrated: boolean;
} & (
  | {
      token: string;
      username: string;
    }
  | {
      token: null;
      username: null;
    }
);

const initialState: UserState = {
  rehydrated: false,
  token: null,
  username: null,
};

export const userReducer = reducerWithInitialState(initialState).case(rehydrate, (state) => ({
  ...state,
  rehydrated: true,
}));

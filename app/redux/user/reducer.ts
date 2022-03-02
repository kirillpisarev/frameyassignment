import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { authenticate } from '~/redux/user/actions';

export type UserState = {
  isAuthenticated: boolean | null;
};

const initialState: UserState = {
  isAuthenticated: null,
};

export const userReducer = reducerWithInitialState(initialState).case(authenticate.done, () => ({
  isAuthenticated: true,
}));

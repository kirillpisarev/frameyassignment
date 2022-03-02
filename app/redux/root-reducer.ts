import { combineReducers } from 'redux';
import { userReducer } from '~/redux/user/reducer';
import { booksReducer } from '~/redux/books/reducer';

export type AppState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  user: userReducer,
  books: booksReducer,
});

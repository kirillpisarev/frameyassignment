import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Book } from '~/api/types';
import { getRandomBooks, searchBooks } from '~/redux/books/actions';
import { signOut } from '~/redux/user/actions';

export type BooksState = {
  random: {
    list: Book[];
  };
  search: {
    list: Book[];
  };
};

const initialState: BooksState = {
  random: { list: [] },
  search: { list: [] },
};

export const booksReducer = reducerWithInitialState(initialState)
  .case(getRandomBooks.done, (state, { result }) => ({
    ...state,
    random: { list: result.list },
  }))
  .case(searchBooks.done, (state, { result, params }) => ({
    ...state,
    search: { list: result.list, query: params.query },
  }))
  .case(signOut.done, () => initialState);

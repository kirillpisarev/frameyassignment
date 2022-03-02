import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Book } from '~/api/types';
import { getRandomBooks, searchBooks } from '~/redux/books/actions';
import { signOut } from '~/redux/user/actions';

export type BooksState = {
  random: {
    list: Book[];
    loading: boolean;
  };
  search: {
    list: Book[];
    query: string;
    loading: boolean;
  };
};

const initialState: BooksState = {
  random: { list: [], loading: false },
  search: { list: [], query: '', loading: false },
};

export const booksReducer = reducerWithInitialState(initialState)
  .case(getRandomBooks.started, (state) => ({
    ...state,
    random: { ...state.random, loading: true },
  }))
  .case(getRandomBooks.done, (state, { result }) => ({
    ...state,
    random: { list: result.list, loading: false },
  }))
  .case(getRandomBooks.failed, (state) => ({
    ...state,
    random: { ...state.random, loading: false },
  }))
  .case(searchBooks.started, (state) => ({
    ...state,
    search: { ...state.search, loading: true },
  }))
  .case(searchBooks.done, (state, { result, params }) => ({
    ...state,
    search: { list: result.list, query: params.query, loading: false },
  }))
  .case(searchBooks.failed, (state) => ({
    ...state,
    search: { ...state.search, loading: false },
  }))
  .case(signOut.done, () => initialState);

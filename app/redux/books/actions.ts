import actionCreatorFactory from 'typescript-fsa';
import { Book } from '~/api/types';

const actionCreator = actionCreatorFactory('@@books');

export const getRandomBooks = actionCreator.async<void, { list: Book[] }, unknown>(
  'GET_RANDOM_BOOKS',
);

export const searchBooks = actionCreator.async<{ query: string }, { list: Book[] }, unknown>(
  'SEARCH_BOOKS',
);

import { AppState } from '~/redux/root-reducer';

export const randomBooksSelector = (state: AppState) => state.books.random.list;
export const searchBooksSelector = (state: AppState) => state.books.search.list;

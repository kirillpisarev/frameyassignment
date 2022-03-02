import { Book } from '~/api/types';

export type RootStackParamList = {
  SIGN_IN: undefined;
  SIGN_UP: undefined;
  DISCOVER: undefined;
  BOOK: { book: Book };
};

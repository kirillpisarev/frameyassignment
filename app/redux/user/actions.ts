import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('@@user');

export const authenticate = actionCreator.async<
  { user: string; password: string },
  { token: string },
  unknown
>('AUTHENTICATE');

export const rehydrate = actionCreator<{ token: string } | null>('REHYDRATE');

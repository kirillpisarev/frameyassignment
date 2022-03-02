import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('@@user');

export const authenticate = actionCreator.async<{}, { token: string }, unknown>('SEARCH_FEED');

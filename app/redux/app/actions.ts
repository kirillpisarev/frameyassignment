import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('@@app');

export const appLoaded = actionCreator('APP_LOADED');

import { AppState } from '~/redux/root-reducer';

export const isAuthenticatedSelector = (state: AppState) => state.user.data !== null;
export const isRehydratedSelector = (state: AppState) => state.user.rehydrated;

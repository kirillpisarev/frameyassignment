import { AppState } from '~/redux/root-reducer';

export const isAuthenticatedSelector = (state: AppState) => state.user.isAuthenticated;

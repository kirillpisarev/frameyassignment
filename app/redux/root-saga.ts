import { all } from 'redux-saga/effects';

import { userSaga } from '~/redux/user/saga';

export function* rootSaga() {
  yield all([userSaga()]);
}

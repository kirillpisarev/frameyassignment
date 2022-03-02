import { all } from 'redux-saga/effects';

import { userSaga } from '~/redux/user/saga';
import { booksSaga } from '~/redux/books/saga';

export function* rootSaga() {
  yield all([userSaga(), booksSaga()]);
}

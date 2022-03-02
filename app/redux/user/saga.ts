import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { authenticate } from '~/redux/user/actions';

function* authenticateSaga({ payload }: ReturnType<typeof authenticate.started>) {
  try {
    yield put(authenticate.done({ result: { token: '' }, params: payload }));
  } catch (error) {
    Alert.alert('Error', String(error));
    yield put(authenticate.failed({ error, params: payload }));
  }
}

export function* userSaga() {
  yield takeEvery(authenticate.started, authenticateSaga);
}

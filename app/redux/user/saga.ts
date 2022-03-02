import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { appLoaded } from '~/redux/app/actions';
import { authenticate, rehydrate } from '~/redux/user/actions';

function* authenticateSaga({ payload }: ReturnType<typeof authenticate.started>) {
  try {
    yield put(authenticate.done({ result: { token: '' }, params: payload }));
  } catch (error) {
    Alert.alert('Error', String(error));
    yield put(authenticate.failed({ error, params: payload }));
  }
}

function* rehydrateSaga() {
  try {
    // TODO:: read token here
    const token = '';
    yield put(rehydrate(token ? { token } : null));
  } catch (error) {
    Alert.alert('Error', String(error));
  }
}

export function* userSaga() {
  yield takeEvery(authenticate.started, authenticateSaga);
  yield takeEvery(appLoaded, rehydrateSaga);
}

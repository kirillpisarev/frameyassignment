import { Alert } from 'react-native';
import { call, put, takeEvery } from 'redux-saga/effects';
import { FrameyApi } from '~/api';
import { User } from '~/api/types';
import { appLoaded } from '~/redux/app/actions';
import { signIn, rehydrate, signUp, signOut } from '~/redux/user/actions';

function* signInSaga({ payload }: ReturnType<typeof signIn.started>) {
  try {
    const response: { user: User } = yield call(FrameyApi.Auth.login, payload);
    yield put(signIn.done({ result: response.user, params: payload }));
  } catch (error) {
    Alert.alert('Error', String(error));
    yield put(signIn.failed({ error, params: payload }));
  }
}

function* signUpSaga({ payload }: ReturnType<typeof signUp.started>) {
  try {
    const response: { user: User } = yield call(FrameyApi.Auth.register, payload);
    yield put(signUp.done({ result: response.user, params: payload }));
  } catch (error) {
    Alert.alert('Error', String(error));
    yield put(signUp.failed({ error, params: payload }));
  }
}

function* signOutSaga() {
  try {
    yield put(signOut.done({ result: null, params: null }));
  } catch (error) {
    Alert.alert('Error', String(error));
    yield put(signOut.failed({ error, params: null }));
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
  yield takeEvery(signIn.started, signInSaga);
  yield takeEvery(signUp.started, signUpSaga);
  yield takeEvery(signOut.started, signOutSaga);
  yield takeEvery(appLoaded, rehydrateSaga);
}

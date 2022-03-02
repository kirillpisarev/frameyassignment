import { Alert } from 'react-native';
import { call, put, takeEvery } from 'redux-saga/effects';
import EncryptedStorage from 'react-native-encrypted-storage';
import { FrameyApi } from '~/api';
import { User } from '~/api/types';
import { appLoaded } from '~/redux/app/actions';
import { signIn, rehydrate, signUp, signOut } from '~/redux/user/actions';

function* signInSaga({ payload }: ReturnType<typeof signIn.started>) {
  try {
    const response: { user: User } = yield call(FrameyApi.Auth.login, payload);
    yield call(persistUserSaga, response.user);
    yield put(signIn.done({ result: response.user, params: payload }));
  } catch (error) {
    Alert.alert('Error', String(error));
    yield put(signIn.failed({ error, params: payload }));
  }
}

function* signUpSaga({ payload }: ReturnType<typeof signUp.started>) {
  try {
    const response: { user: User } = yield call(FrameyApi.Auth.register, payload);
    yield call(persistUserSaga, response.user);
    yield put(signUp.done({ result: response.user, params: payload }));
  } catch (error) {
    Alert.alert('Error', String(error));
    yield put(signUp.failed({ error, params: payload }));
  }
}

function* signOutSaga() {
  try {
    yield call<() => Promise<void>>(EncryptedStorage.clear);
    yield put(signOut.done({}));
  } catch (error) {
    Alert.alert('Error', String(error));
    yield put(signOut.failed({ error }));
  }
}

function* rehydrateUserSaga() {
  try {
    const user: string | null = yield call<(key: string) => Promise<string | null>>(
      EncryptedStorage.getItem,
      'user',
    );
    yield put(rehydrate({ user: user ? JSON.parse(user) : null }));
  } catch (error) {
    Alert.alert('Error', String(error));
  }
}

function* persistUserSaga(user: User) {
  yield call<(key: string, value: string) => Promise<void>>(
    EncryptedStorage.setItem,
    'user',
    JSON.stringify(user),
  );
}

export function* userSaga() {
  yield takeEvery(signIn.started, signInSaga);
  yield takeEvery(signUp.started, signUpSaga);
  yield takeEvery(signOut.started, signOutSaga);
  yield takeEvery(appLoaded, rehydrateUserSaga);
}

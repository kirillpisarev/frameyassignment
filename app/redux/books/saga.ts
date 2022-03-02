import { Alert } from 'react-native';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { FrameyApi } from '~/api';
import { Book } from '~/api/types';
import { getRandomBooks } from '~/redux/books/actions';
import { tokenSelector } from '~/redux/user/selectors';

function* getRandomBooksSaga({ payload }: ReturnType<typeof getRandomBooks.started>) {
  try {
    const token: ReturnType<typeof tokenSelector> = yield select(tokenSelector);
    if (!token) {
      throw new Error('Token is empty');
    }

    const response: { books: Book[] } = yield call(FrameyApi.Books.getList, { query: null }, token);
    yield put(getRandomBooks.done({ result: { list: response.books }, params: payload }));
  } catch (error) {
    Alert.alert('Error', String(error));
    yield put(getRandomBooks.failed({ error, params: payload }));
  }
}

export function* booksSaga() {
  yield takeEvery(getRandomBooks.started, getRandomBooksSaga);
}

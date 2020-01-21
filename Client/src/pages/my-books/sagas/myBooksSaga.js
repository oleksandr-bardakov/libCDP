import {
  put, takeEvery, call,
} from 'redux-saga/effects';
import http from 'utils/http';

import {
  LOAD_MY_BOOKS, setMyBooks,
  RETURN_BOOKS,
} from '../actions/myBookActions';
import { startRequest, finishRequest } from 'common/actions/loadingActions';

export function* loadMyBooks(action) {
  try {
    yield put(startRequest());
    const books = yield call(http, {
      url: `books/${action.payload}/`,
      method: 'get',
    });
    yield put(setMyBooks(books.data));
    yield put(finishRequest());
  } catch (error) {
    yield put(finishRequest());
  }
}

export function* returnBook(action) {
  try {
    yield put(startRequest());
    yield call(http, {
      url: 'books/return',
      method: 'post',
      data: action.payload,
    });
    yield call(loadMyBooks, { payload: action.payload.userId });
    yield put(finishRequest());
  } catch (error) {
    yield put(finishRequest());
  }
}

export default function* myBooksRootSaga() {
  yield takeEvery(LOAD_MY_BOOKS, loadMyBooks);
  yield takeEvery(RETURN_BOOKS, returnBook);
}

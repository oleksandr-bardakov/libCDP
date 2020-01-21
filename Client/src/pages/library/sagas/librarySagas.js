import {
  put, takeEvery, call,
} from 'redux-saga/effects';
import http from 'utils/http';

import {
  LOAD_LIBRARY_BOOKS, setLibraryBooks,
  TAKE_BOOK,
  UPDATE_BOOK,
  ADD_BOOK,
  DELETE_BOOK,
} from '../actions/libraryActions';
import { startRequest, finishRequest } from 'common/actions/loadingActions';

export function* loadLibraryBooks() {
  try {
    yield put(startRequest());
    const books = yield call(http, {
      url: 'books/',
      method: 'get',
    });
    yield put(setLibraryBooks(books.data));
    yield put(finishRequest());
  } catch (error) {
    yield put(finishRequest());
  }
}

export function* takeBook(action) {
  try {
    yield put(startRequest());
    yield call(http, {
      url: 'books/buy',
      method: 'post',
      data: action.payload,
    });
    yield call(loadLibraryBooks);
    yield put(finishRequest());
  } catch (error) {
    yield put(finishRequest());
  }
}

export function* updateBook(action) {
  try {
    yield put(startRequest());
    yield call(http, {
      url: 'admin/books/',
      method: 'put',
      data: action.payload,
    });
    yield call(loadLibraryBooks);
    yield put(finishRequest());
  } catch (error) {
    yield put(finishRequest());
  }
}

export function* addBook(action) {
  try {
    yield put(startRequest());
    yield call(http, {
      url: 'admin/books/',
      method: 'post',
      data: action.payload,
    });
    yield call(loadLibraryBooks);
    yield put(finishRequest());
  } catch (error) {
    yield put(finishRequest());
  }
}

export function* deleteBook(action) {
  try {
    yield put(startRequest());
    yield call(http, {
      url: 'admin/books/',
      method: 'delete',
      data: action.payload,
    });
    yield call(loadLibraryBooks);
    yield put(finishRequest());
  } catch (error) {
    yield put(finishRequest());
  }
}

export default function* libraryRootSaga() {
  yield takeEvery(LOAD_LIBRARY_BOOKS, loadLibraryBooks);
  yield takeEvery(TAKE_BOOK, takeBook);
  yield takeEvery(UPDATE_BOOK, updateBook);
  yield takeEvery(ADD_BOOK, addBook);
  yield takeEvery(DELETE_BOOK, deleteBook);
}

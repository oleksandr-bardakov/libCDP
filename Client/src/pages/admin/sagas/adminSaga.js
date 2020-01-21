import {
  put, takeEvery, call,
} from 'redux-saga/effects';
import http from 'utils/http';

import {
  LOAD_USERS, setUsers,
  UPDATE_USER_ROLE,
  DELETE_USER,
  LOAD_PAYMENTS, setPayments,
  LOAD_TOP_PAYMENTS_BOOKS, setTopBooks,
} from '../actions/adminActions';
import { startRequest, finishRequest } from 'common/actions/loadingActions';

export function* loadUsers() {
  try {
    yield put(startRequest());
    const users = yield call(http, {
      url: 'admin/users/',
      method: 'get',
    });
    yield put(setUsers(users.data));
    yield put(finishRequest());
  } catch (error) {
    yield put(finishRequest());
  }
}

export function* updateUserRole(action) {
  try {
    yield put(startRequest());
    yield call(http, {
      url: 'admin/users/',
      method: 'put',
      data: action.payload,
    });
    yield call(loadUsers);
    yield put(finishRequest());
  } catch (error) {
    yield put(finishRequest());
  }
}

export function* deleteUser(action) {
  try {
    yield put(startRequest());
    yield call(http, {
      url: 'admin/users/',
      method: 'delete',
      data: action.payload,
    });
    yield call(loadUsers);
    yield put(finishRequest());
  } catch (error) {
    yield put(finishRequest());
  }
}

export function* loadPayments() {
  try {
    yield put(startRequest());
    const payments = yield call(http, {
      url: 'admin/payments/',
      method: 'get',
    });
    yield put(setPayments(payments.data));
    yield put(finishRequest());
  } catch (error) {
    yield put(finishRequest());
  }
}

export function* loadTopBooks() {
  try {
    yield put(startRequest());
    const top = yield call(http, {
      url: 'admin/payments/top/',
      method: 'get',
    });
    yield put(setTopBooks(top.data));
    yield put(finishRequest());
  } catch (error) {
    yield put(finishRequest());
  }
}

export default function* adminRootSaga() {
  yield takeEvery(LOAD_USERS, loadUsers);
  yield takeEvery(UPDATE_USER_ROLE, updateUserRole);
  yield takeEvery(DELETE_USER, deleteUser);
  yield takeEvery(LOAD_PAYMENTS, loadPayments);
  yield takeEvery(LOAD_TOP_PAYMENTS_BOOKS, loadTopBooks);
}

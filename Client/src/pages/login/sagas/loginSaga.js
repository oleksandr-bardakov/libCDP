import { put, takeEvery, call } from 'redux-saga/effects';
import http from 'utils/http';
import history from 'utils/history';

import {
  SIGNIN_REQUEST, signinFailure,
  REGISTRATION_REQUEST, registrationFailure,
} from '../actions/loginActions';
import { setAuthData } from 'common/actions/authActions';
import { startRequest, finishRequest } from 'common/actions/loadingActions';

export function* authorizeSaga(action) {
  try {
    yield put(startRequest());
    const responseData = yield call(http, {
      url: 'login/',
      method: 'post',
      data: action.payload,
    });
    localStorage.setItem('AuthToken', responseData.data.token);
    yield put(setAuthData(responseData.data));
    history.push('/my-book');
    yield put(finishRequest());
  } catch (error) {
    yield put(finishRequest());
    yield put(signinFailure());
  }
}

export function* registrationSaga(action) {
  try {
    yield put(startRequest());
    const responseData = yield call(http, {
      url: 'registration',
      method: 'post',
      data: action.payload,
    });
    yield put(setAuthData(responseData.data));
    history.push('/login');
    yield put(finishRequest());
  } catch (error) {
    yield put(finishRequest());
    yield put(registrationFailure());
  }
}

export default function* LoginRootSaga() {
  yield takeEvery(SIGNIN_REQUEST, authorizeSaga);
  yield takeEvery(REGISTRATION_REQUEST, registrationSaga);
}

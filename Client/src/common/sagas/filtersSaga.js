import { call, put, takeEvery } from 'redux-saga/effects';
import http from 'utils/http';
import {
  GET_FILTERS, setFilters,
} from '../actions/filtersActions';

export function* fetchFilters() {
  try {
    const filters = yield call(http, {
      method: 'GET',
      url: 'filters',
    });
    yield put(setFilters(filters.data));
  } catch (e) {
    // error message
  }
}

export default function* filtersRootSaga() {
  yield takeEvery(GET_FILTERS, fetchFilters);
}

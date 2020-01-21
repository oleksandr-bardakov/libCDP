import { all } from 'redux-saga/effects';

import loginRootSaga from 'pages/login/sagas/loginSaga';
import myBooksRootSaga from 'pages/my-books/sagas/myBooksSaga';
import libraryRootSaga from 'pages/library/sagas/librarySagas';
import adminRootSaga from 'pages/admin/sagas/adminSaga';
import filtersRootSaga from './filtersSaga';

// single entry point to start all Sagas at once
const sagas = function* rootSaga() {
  yield all([
    loginRootSaga(),
    myBooksRootSaga(),
    libraryRootSaga(),
    adminRootSaga(),
    filtersRootSaga(),
  ]);
};

export default sagas;

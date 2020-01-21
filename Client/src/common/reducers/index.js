import { combineReducers } from 'redux';
import authReducer from './authReducer';
import loginReducer from 'pages/login/reducers/loginReducer';
import filtersReducer from './filtersReducer';
import loadingReducer from './loadingReducer';
import myBooksReducer from 'pages/my-books/reducers/myBooksReducer';
import libraryReducer from 'pages/library/reducers/libraryReducer';
import adminReducer from 'pages/admin/reducers/adminReducers';
import { reduxFormReducer } from './reduxFormReducer';

export default combineReducers({
  loginReducer,
  authReducer,
  myBooksReducer,
  libraryReducer,
  adminReducer,
  filtersReducer,
  loadingReducer,
  form: reduxFormReducer.form,
});

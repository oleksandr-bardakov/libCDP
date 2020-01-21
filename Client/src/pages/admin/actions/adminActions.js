export const LOAD_USERS = '@admin/LOAD_USERS';
export const SET_USERS = '@admin/SET_USERS';
export const UPDATE_USER_ROLE = '@admin/UPDATE_USER_ROLE';
export const DELETE_USER = '@admin/DELETE_USER';
export const LOAD_PAYMENTS = '@admin/LOAD_PAYMENTS';
export const SET_PAYMENTS = '@admin/SET_PAYMENTS';
export const LOAD_TOP_PAYMENTS_BOOKS = '@admin/LOAD_TOP_PAYMENTS_BOOKS';
export const SET_TOP_PAYMENTS_BOOKS = '@admin/SET_TOP_PAYMENTS_BOOKS';

export const loadUsers = () => ({
  type: LOAD_USERS,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const updateUserRole = (userData) => ({
  type: UPDATE_USER_ROLE,
  payload: userData,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export const loadPayments = () => ({
  type: LOAD_PAYMENTS,
});

export const setPayments = (payments) => ({
  type: SET_PAYMENTS,
  payload: payments,
});

export const loadTopBooks = () => ({
  type: LOAD_TOP_PAYMENTS_BOOKS,
});

export const setTopBooks = (top) => ({
  type: SET_TOP_PAYMENTS_BOOKS,
  payload: top,
});

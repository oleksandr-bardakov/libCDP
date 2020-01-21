export const LOAD_MY_BOOKS = '@myBook/LOAD_MY_BOOKS';
export const SET_MY_BOOKS = '@myBook/SET_MY_BOOKS';
export const RETURN_BOOKS = '@myBook/RETURN_BOOKS';

export const loadMyBooks = (userId) => ({
  type: LOAD_MY_BOOKS,
  payload: userId,
});

export const setMyBooks = (books) => ({
  type: SET_MY_BOOKS,
  payload: books,
});

export const returnMyBooks = (bookData) => ({
  type: RETURN_BOOKS,
  payload: bookData,
});

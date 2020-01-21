export const LOAD_LIBRARY_BOOKS = '@library/LOAD_LIBRARY_BOOKS';
export const SET_LIBRARY_BOOKS = '@library/SET_LIBRARY_BOOKS';
export const TAKE_BOOK = '@library/TAKE_BOOK';
export const UPDATE_BOOK = '@library/UPDATE_BOOK';
export const ADD_BOOK = '@library/ADD_BOOK';
export const DELETE_BOOK = '@library/DELETE_BOOK';

export const loadLibraryBooks = () => ({
  type: LOAD_LIBRARY_BOOKS,
});

export const setLibraryBooks = (books) => ({
  type: SET_LIBRARY_BOOKS,
  payload: books,
});

export const takeBook = (bookData) => ({
  type: TAKE_BOOK,
  payload: bookData,
});

export const updateBook = (bookData) => ({
  type: UPDATE_BOOK,
  payload: bookData,
});

export const addBook = (bookData) => ({
  type: ADD_BOOK,
  payload: bookData,
});

export const deleteBook = (bookId) => ({
  type: DELETE_BOOK,
  payload: bookId,
});

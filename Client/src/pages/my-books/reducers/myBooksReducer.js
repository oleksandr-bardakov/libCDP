import { SET_MY_BOOKS } from '../actions/myBookActions';

const initialState = {
  myBooks: [],
  columnsToDisplay: [
    {
      Name: 'Name', Id: 'name', className: 'without-width-col',
    },
    {
      Name: 'Autor', Id: 'autor', className: 'biggest-col',
    },
    {
      Name: 'Year', Id: 'year', className: 'medium-col',
    },
    {
      Name: 'Genres', Id: 'genres_to_books', className: 'biggest-col', isArray: true,
    },
  ],
};

const myBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_BOOKS:
      return {
        ...state,
        myBooks: action.payload,
      };
    default:
      return state;
  }
};

export default myBooksReducer;

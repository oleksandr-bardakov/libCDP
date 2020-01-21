import { SET_LIBRARY_BOOKS } from '../actions/libraryActions';

const initialState = {
  libraryBooks: [],
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
    {
      Name: 'Amount', Id: 'amount', className: 'medium-col',
    },
    {
      Name: 'Cost', Id: 'cost', className: 'medium-col',
    },
  ],
};

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIBRARY_BOOKS:
      return {
        ...state,
        libraryBooks: action.payload,
      };
    default:
      return state;
  }
};

export default libraryReducer;

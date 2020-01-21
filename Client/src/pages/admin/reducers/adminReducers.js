import { SET_USERS, SET_PAYMENTS, SET_TOP_PAYMENTS_BOOKS } from '../actions/adminActions';

const initialState = {
  users: [],
  columnsToDisplayUsers: [
    {
      Name: 'Name', Id: 'name', className: 'without-width-col',
    },
    {
      Name: 'Email', Id: 'email', className: 'biggest-col',
    },
    {
      Name: 'Date registration', Id: 'date_registration', className: 'biggest-col',
    },
    {
      Name: 'Count of books', Id: 'users_to_books', className: 'medium-col', isArray: true,
    },
    {
      Name: 'Role', Id: 'role', className: 'biggest-col',
    },
    {
      Name: 'Delete', Id: 'deleted', className: 'medium-col',
    },
  ],
  payments: [],
  columnsToDisplayPayments: [
    {
      Name: 'Book', Id: 'bookName', className: 'without-width-col',
    },
    {
      Name: 'User', Id: 'userName', className: 'biggest-col',
    },
    {
      Name: 'Date payment', Id: 'datePeyment', className: 'big-col',
    },
    {
      Name: 'Payment cost', Id: 'paymentCost', className: 'medium-col',
    },
    {
      Name: 'Current cost', Id: 'currenCost', className: 'medium-col',
    },
  ],
  toopBooks: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_PAYMENTS:
      return {
        ...state,
        payments: action.payload,
      };
    case SET_TOP_PAYMENTS_BOOKS:
      return {
        ...state,
        toopBooks: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;

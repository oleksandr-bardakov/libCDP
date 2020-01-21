import { SET_FILTERS } from '../actions/filtersActions';

const initialState = {
  filters: {
    roles: [],
    genres: [],
  },
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

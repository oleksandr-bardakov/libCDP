import { START_REQUEST, FINISH_REQUEST } from '../actions/loadingActions';

const initialState = {
  isLoading: false,
};

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case START_REQUEST:
      return {
        isLoading: true,
      };
    case FINISH_REQUEST:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
}

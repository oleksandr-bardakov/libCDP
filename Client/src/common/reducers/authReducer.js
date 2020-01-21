import { SET_AUTHDATA, LOGOUT } from '../actions/authActions';

const initialState = {
  user: null,
  authToken: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHDATA:
    case LOGOUT:
      return {
        ...state,
        user: action.payload.user,
        authToken: action.payload.authToken,
      };
    default:
      return state;
  }
}

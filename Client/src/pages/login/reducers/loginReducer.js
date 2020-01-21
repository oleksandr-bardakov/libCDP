import {
  SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE,
  REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILURE,
} from '../actions/loginActions';

const initialState = {
  isLoading: false,
  error: false,
  isLoadingRegistration: false,
  errorRegistration: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_FAILURE:
    case SIGNIN_REQUEST:
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    case REGISTRATION_REQUEST:
    case REGISTRATION_FAILURE:
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoadingRegistration: action.payload.isLoading,
        errorRegistration: action.payload.error,
      };
    default:
      return state;
  }
}

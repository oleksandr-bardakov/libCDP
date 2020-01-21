export const SIGNIN_REQUEST = '@auth/SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = '@auth/SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = '@auth/SIGNIN_FAILURE';
export const REGISTRATION_REQUEST = '@auth/REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = '@auth/REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = '@auth/REGISTRATION_FAILURE';

export const signinRequest = (name, password) => ({
  type: SIGNIN_REQUEST,
  payload: {
    error: false,
    isLoading: true,
    name,
    password,
  },
});

export const signinFailure = () => ({
  type: SIGNIN_FAILURE,
  payload: {
    isLoading: false,
    error: true,
  },
});

export const signinRequestSuccess = () => ({
  type: SIGNIN_SUCCESS,
  payload: {
    error: false,
    isLoading: false,
  },
});

export const registration = (name, email, password) => ({
  type: REGISTRATION_REQUEST,
  payload: {
    error: false,
    isLoading: true,
    name,
    email,
    password,
  },
});

export const registrationFailure = () => ({
  type: REGISTRATION_FAILURE,
  payload: {
    isLoading: false,
    error: true,
  },
});

export const registrationSuccess = () => ({
  type: REGISTRATION_SUCCESS,
  payload: {
    error: false,
    isLoading: false,
  },
});

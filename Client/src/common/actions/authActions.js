
export const SET_AUTHDATA = '@auth/SET_AUTHDATA';
export const GET_TOKEN = '@auth/GET_TOKEN';
export const LOGOUT = '@auth/LOGOUT';
export const GET_DEPARTMENTS = '@auth/GET_DEPARTMENTS';
export const SET_DEPARTMENTS = '@auth/SET_DEPARTMENTS';

export const setAuthData = (data) => ({
  type: SET_AUTHDATA,
  payload: {
    user: data.userData,
    authToken: data.token,
  },
});

export const logout = () => ({
  type: LOGOUT,
  payload: {
    user: null,
    authToken: null,
  },
});

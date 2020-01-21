export const GET_FILTERS = '@filters/GET_FILTERS';
export const SET_FILTERS = '@filters/SET_FILTERS';

export const getFilters = (filters) => {
  return {
    type: GET_FILTERS,
    payload: {
      filters,
    },
  };
};

export const setFilters = (filters) => {
  return {
    type: SET_FILTERS,
    payload: filters,
  };
};

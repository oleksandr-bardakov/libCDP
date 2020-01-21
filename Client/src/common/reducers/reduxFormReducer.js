import { reducer as formReducer } from 'redux-form';

export const reduxFormReducer = {
  form: formReducer.plugin({
    bookDetailsForm: (state, action) => {
      switch (action.type) {
        default:
          return state;
      }
    },
  }),
};

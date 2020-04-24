/*
 *
 * CreateUser reducer
 *
 */

import produce from 'immer';
import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  success: false,
};

const addUserReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CREATE_USER:
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      case CREATE_USER_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.success = true;      
        break;
      
    }
  });

export default addUserReducer;
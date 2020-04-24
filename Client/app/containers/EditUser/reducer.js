/*
 *
 * CreateUser reducer
 *
 */

import produce from 'immer';
import {
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  success: false,
};

const updateUserReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_USER:
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      case UPDATE_USER_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        break;

    }
  });

export default updateUserReducer;
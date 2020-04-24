
/*
 *
 * EditUser actions
 *
 */
import {
  
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
} from './constants';

export function updateUserAction(userInfor) {
  return {
    type: UPDATE_USER,
    userInfor,
  };
}

export function updateUserSuccessAction(query) {
  return {
    type: UPDATE_USER_SUCCESS,
    query,
  };
}
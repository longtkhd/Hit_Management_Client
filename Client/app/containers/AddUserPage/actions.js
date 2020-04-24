// CreateUser action

import {
  
  CREATE_USER_SUCCESS,
  CREATE_USER,
  
} from './constants';

export function createUserAction(userInfor) {
  return {
    type: CREATE_USER,
    userInfor,
  };
}

export function createUserSuccessAction(query) {
  return {
    type: CREATE_USER_SUCCESS,
    query,
  };
}

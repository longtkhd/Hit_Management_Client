// MemberPage Action

import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FALSE,
  DELETE_USER,
  DELETE_USER_SUCCESS,
} from './constants';
// import { func } from 'prop-types';

export function getAllUserAction(body){
  return {
    type: GET_USER,
    body,
  }
}

export function getAllUserSuccessAction(data){
  return {
    type: GET_USER_SUCCESS,
    data,
  }
}

export function getAllUserFalseAction(){
  return {
    type: GET_USER_FALSE,
  }
}

//DELETE USER
export function deleteUsers(userdelete) {
  //{id:abc}
  return {
    type: DELETE_USER,
    userdelete,
  };
}
export function deleteUserSuccess(query) {
  return {
    type: DELETE_USER_SUCCESS,
    query,
  };
}
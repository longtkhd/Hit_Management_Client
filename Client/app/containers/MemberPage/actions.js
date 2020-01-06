// MemberPage Action

import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FALSE,
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
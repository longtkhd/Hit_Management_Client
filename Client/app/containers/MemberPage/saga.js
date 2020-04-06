// MemberPage Saga

import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import APICall from '../../APICall';
import {USER} from '../../urlConfig';
import * as types from './constants';
import axios from 'axios';

import { getAllUserAction, getAllUserSuccessAction, getAllUserFalseAction} from './actions';

export function* fetchGetAllUser(action){
  // console.log(action);
  try {
    const data = yield call(axios, {

      url: `${USER}/get`,
      method: 'GET',
      headers: {
        "x-access-token": `${localStorage.getItem('token')}`,
      },
     
    });

    if(data){
    console.log(data.data)
      yield put(getAllUserSuccessAction(data.data));
    }else{
      yield put(getAllUserFalseAction({}));
      console.log("fetch api failed");
    }

  }catch(error){
    yield put(getAllUserFalseAction({error}));
    console.log("error");

  }
}

export default function* memberPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(types.GET_USER, fetchGetAllUser);
  
}

// MemberPage Saga

import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import {USER} from '../../urlConfig';
import * as types from './constants';
import axios from 'axios';

import { getAllUserAction, getAllUserSuccessAction, getAllUserFalseAction, deleteUserSuccess,} from './actions';

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

export function* deleteUser(action) {
  console.log('deletesaga')
  try {
    const deletedUser = yield call(axios, {
      url: `${USER}/delete/${action.userdelete.id}`,
      method: 'DELETE',
      headers: {
        "x-access-token": `${localStorage.getItem('token')}`,
      },
    });
    if (deletedUser) {
      yield put({
        type: types.GET_USER,
      });
      yield put(
        deleteUserSuccess({
          filter: {
            role: action.user.role,
          },

        }),

      );
    } else {
      // yield put(getUsersError({})); // reused
    }
  } catch (error) {
    // yield put(getUsersError(error));
  }
}

export default function* memberPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(types.GET_USER, fetchGetAllUser);
  yield takeLatest(types.DELETE_USER, deleteUser);
  
}

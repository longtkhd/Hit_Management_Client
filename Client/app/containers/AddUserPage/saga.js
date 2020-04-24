import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { USER } from '../../urlConfig';
import * as types from './constants';
import axios from 'axios';
import { createUserAction, createUserSuccessAction} from './actions';

export function* createUser(action) {

  // const formData = new FormData();
  // formData.append('avatar', action.userInfor.avatar);
  const token = localStorage.getItem('token');

  try {

    const formData = new FormData();
    formData.append('avatar', action.userInfor.avatar);
    formData.append('qrCode', action.userInfor.qrCode);
    formData.append('fullName', action.userInfor.fullName);
    formData.append('email', action.userInfor.email);
    formData.append('role', action.userInfor.role);
    formData.append('studentCode', action.userInfor.studentCode);
    formData.append('class', action.userInfor.class);
    formData.append('faculty', action.userInfor.faculty);
    formData.append('schoolYear', action.userInfor.schoolYear);
    formData.append('phone', action.userInfor.phone);
    formData.append('address', action.userInfor.address);
    formData.append('dob', action.userInfor.dob);
    formData.append('position', action.userInfor.position);
    formData.append('gender', action.userInfor.gender);
    formData.append('isActive', action.userInfor.isActive);
    formData.append('isFormer', action.userInfor.isFormer);
    formData.append('bio', action.userInfor.bio);
    formData.append('clubYear', action.userInfor.clubYear);
    const createdUser = yield call(axios, {
      url: `${USER}/add`,
      method: 'POST',
      headers: {
        "x-access-token": `${localStorage.getItem('token')}`,
      },
      data: formData,
    });

    if (createdUser) {
      yield put(createUserSuccessAction());
      yield put({
        type: types.GET_USER,
      });
    } else {
      // yield put(getUsersError({}));
    }
  } catch (error) {
    // yield put(getUsersError(error));
  }
}

export default function* addUserSaga() {
  
  yield takeLatest(types.CREATE_USER, createUser);
  
}

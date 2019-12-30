import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { loginSucceed, loginFaild } from './actions';
import * as types from './constants';
import { LOGIN_API } from '../../urlConfig';

export function* login(action) {
  console.log('login');
  try {
    const data = yield call(axios, {
      url: LOGIN_API,
      method: 'POST',
      data: {
        email: action.data.email,
        password: action.data.password,
      },
    });
    console.log(data);
    if (data) {
      console.log('data');
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('isAuthenticated', true);
      yield put(loginSucceed(data.data.token));
    }
  } catch (error) {}
}

export default function* signInSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(types.LOGIN, login);
}

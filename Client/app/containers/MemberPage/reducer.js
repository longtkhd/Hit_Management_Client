  /* 
  MemberPage Reducer
  */
  import produce from 'immer';
  import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FALSE,
    DELETE_USER,
    DELETE_USER_SUCCESS,
  } from './constants';

  export const initialState = {
    users: [],
    loading: false,
    error: false,
    success: false,
  };
// console.log(initialState);

const memberPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_USER:
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      case GET_USER_SUCCESS:
        // draft.userData.repositories = action.repos;
        draft.loading = false;
        // draft.currentUser = action.username;
        draft.error = false;
        draft.success = true;
        draft.users = action.data.users;
        break;
      case GET_USER_FALSE:
        draft.loading = false;
        draft.success = false;
        draft.error = false;
        break;

      case DELETE_USER:
        draft.loading = true;
        draft.success = false;
        draft.error = false;
        break ;


      case DELETE_USER_SUCCESS:
        draft.loading = true;
        draft.success = true;
        draft.error = false;
        break;
    }
  });


export default memberPageReducer;

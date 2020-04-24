/* Adduser selector */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the editUser state domain
 */



const selectEditUserDomain = state => state.updateUser || initialState;

const makeSelectEditUser = () =>
  createSelector(
    selectEditUserDomain,
    substate => substate,
  );

export default makeSelectEditUser;
export { selectEditUserDomain };
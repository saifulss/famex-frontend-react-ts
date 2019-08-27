import {initialReduxStoreState} from '../store/store';
import {ACTION_TYPES} from "../store/actions";

// TODO: Need to find a way to be able to type the action, for better code autocomplete.
export const rootReducer = (state = initialReduxStoreState, action: any) => {

  // if (action.type === ACTION_TYPES.FETCH_EXPENSE_CLAIMS) {
  //   return Object.assign({}, state, {
  //   });
  // }
  //
  // if (action.type === ACTION_TYPES.FETCH_EXPENSE_CLAIM) {
  //   return Object.assign({}, state, {
  //   });
  // }
  //

  if (action.type === ACTION_TYPES.CLEAR_LOCAL_DATA) {
    console.log('arrived at reducer with value: ', action.someCode);
    localStorage.clear();
    return state;
  }

  if (action.type === ACTION_TYPES.FETCH_USERS) {
    return Object.assign({}, state, {
      users: action.payload
    });
  }

  return state;
};

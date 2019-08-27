import {initialReduxStoreState} from '../store/store';
import {Action, ACTION_TYPES} from "../store/actions";

export const rootReducer = (state = initialReduxStoreState, action: Action) => {

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
  // if (action.type === ACTION_TYPES.CREATE_EXPENSE_CLAIM) {
  //   localStorage.clear();
  //   return state;
  // }

  if (action.type === ACTION_TYPES.FETCH_USERS) {
    console.log('arrived at reducer with value: ', action.payload);
    return Object.assign({}, state, {
      users: action.payload
    });
  }

  return state;
};

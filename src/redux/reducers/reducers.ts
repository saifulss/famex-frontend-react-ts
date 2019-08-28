import {initialReduxStoreState} from '../store/store';
import {ACTION_TYPES} from "../actions/actions";

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

// TODO: Need to find a way to be able to type the action, for better code autocomplete.
  if (action.type === ACTION_TYPES.CLEAR_LOCAL_DATA) {
    console.log('arrived at reducer with value: ', action.canBeAnything);
    localStorage.clear();
    return state;
  }

  if (action.type === ACTION_TYPES.FETCH_USERS) {
    console.log(`action is: ${action}`);

    return Object.assign({}, state, {
      someMeta: action.someMetaDescribingTheNetworkCall
    });
  }

  if (action.type === ACTION_TYPES.UPDATE_USERS) {
    console.log(`updating users...`);

    return Object.assign({}, state, {
      users: action.payload
    });
  }

  return state;
};

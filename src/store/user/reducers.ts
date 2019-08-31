import {STORE_CURRENT_USER, UPDATE_FETCHED_USERS, UserActionTypes, UserState} from "./types";

const initialState: UserState = {
  currentUser: undefined,
  users: []
};

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  if (action.type === UPDATE_FETCHED_USERS) {
    return {
      ...state,
      users: action.users
    }
  }

  if (action.type === STORE_CURRENT_USER) {
    return {
      ...state,
      currentUser: action.currentUser
    }
  }

  return state;
};
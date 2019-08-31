import {UPDATE_FETCHED_USERS, UserActionTypes, UserState} from "./types";

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

  return state;
};
import {FETCH_USERS, UserActionTypes, UserState} from "./types";

const initialState: UserState = {
  users: []
};

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  if (action.type === FETCH_USERS) {
    return {
      users: action.users
    };
  }

  return state
};
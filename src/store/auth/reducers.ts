import {
  AuthActionTypes,
  AuthState,
  CLEAR_ACCESS_TOKEN,
  CLEAR_CURRENT_USER,
  STORE_ACCESS_TOKEN,
  STORE_CURRENT_USER
} from "./types";

const initialState: AuthState = {
  currentUser: undefined,
  accessToken: undefined
};

export const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  if (action.type === STORE_ACCESS_TOKEN) {
    return {
      ...state,
      accessToken: action.accessToken
    };
  }

  if (action.type === STORE_CURRENT_USER) {
    return {
      ...state,
      currentUser: action.currentUser
    };
  }

  if (action.type === CLEAR_CURRENT_USER) {
    return {
      ...state,
      currentUser: undefined
    };
  }

  if (action.type === CLEAR_ACCESS_TOKEN) {
    return {
      ...state,
      accessToken: undefined
    };
  }

  return state;
};

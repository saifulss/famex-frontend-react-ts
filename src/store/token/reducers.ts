import {STORE_TOKEN, TokenActionTypes, TokenState} from "./types";

const initialState: TokenState = {
  token: undefined
};

export const tokenReducer = (state = initialState, action: TokenActionTypes): TokenState => {
  if (action.type === STORE_TOKEN) {
    return {
      token: action.token
    }
  }

  return state;
};
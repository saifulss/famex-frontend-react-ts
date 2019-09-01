import axios from "axios";
import {ApiConstants} from "../../constants/ApiConstants";
import {User} from "../user/types";
import {STORE_ACCESS_TOKEN, STORE_CURRENT_USER, StoreAccessTokenAction, StoreCurrentUserAction} from "./types";
import {AnyAction} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppState} from "../rootReducer";

// thunk
export const attemptAuthentication = (username: string, password: string): ThunkAction<void, any, any, AnyAction> => {
  return async (dispatch: ThunkDispatch<AppState, any, AnyAction>) => {
    const response = await axios.post(`${ApiConstants.BASE_URL}/authenticate`, null, {
      params: {
        username,
        password
      } // todo: make backend API accept it in POST body instead of request params
    });

    const {user, token} = response.data;
    dispatch(storeCurrentUser(user));
    dispatch(storeToken(token))
  };
};

export function storeCurrentUser(currentUser: User): StoreCurrentUserAction {
  return {
    type: STORE_CURRENT_USER,
    currentUser
  };
}

const storeToken = (accessToken: string): StoreAccessTokenAction => ({
  type: STORE_ACCESS_TOKEN,
  accessToken
});

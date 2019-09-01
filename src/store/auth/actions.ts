import axios from "axios";
import {ApiConstants} from "../../constants/ApiConstants";
import {User} from "../user/types";
import {STORE_ACCESS_TOKEN, STORE_CURRENT_USER, StoreAccessTokenAction, StoreCurrentUserAction} from "./types";
import {Dispatch} from "redux";

// thunk
export const attemptAuthentication = (username: string, password: string) => {
  return (dispatch: Dispatch): void => {
    axios.post(`${ApiConstants.BASE_URL}/authenticate`, null, {
      params: {
        username,
        password
      } // todo: make backend API accept it in POST body instead of request params
    }).then((results) => {
      const {user, token} = results.data;
      console.log(user);
      dispatch(storeCurrentUser(user));
      dispatch(storeToken(token))
    });
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

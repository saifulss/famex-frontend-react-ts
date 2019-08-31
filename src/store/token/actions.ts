import axios from 'axios';
import {STORE_TOKEN, StoreTokenAction} from "./types";
import {ApiConstants} from "../../constants/ApiConstants";
import {storeCurrentUser} from "../user/actions";

// thunk
export const authenticate = (username: string, password: string) => {
  return (dispatch: any) => {
    axios.post(`${ApiConstants.BASE_URL}/authenticate`, null, {
      params: {
        username,
        password
      } // todo: make backend API accept it in POST body instead of request params
    }).then((results) => {
      const {user, token} = results.data;
      dispatch(storeCurrentUser(user));
      dispatch(storeToken(token)) // todo: get the actual auth header content
    });
  };
};

const storeToken = (token: string): StoreTokenAction => ({
  type: STORE_TOKEN,
  token
});
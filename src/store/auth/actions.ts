import axios from "axios";
import { ApiConstants } from "../../constants/ApiConstants";
import { User } from "../user/types";
import {
  CLEAR_ACCESS_TOKEN,
  CLEAR_CURRENT_USER, ClearAccessTokenAction,
  ClearCurrentUserAction,
  ILoginResponseBody,
  STORE_ACCESS_TOKEN,
  STORE_CURRENT_USER,
  StoreAccessTokenAction,
  StoreCurrentUserAction
} from "./types";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppState } from "../rootReducer";

export const storeCurrentUser = (currentUser: User): StoreCurrentUserAction => ({
  type: STORE_CURRENT_USER,
  currentUser
});

// thunk
export const attemptAuthentication = (
  identifier: string,
  password: string
): ThunkAction<void, any, any, AnyAction> => {
  return async (dispatch: ThunkDispatch<AppState, any, AnyAction>) => {
    const requestBody = {
      identifier,
      password
    };

    const response = await axios.post(
      `${ApiConstants.BASE_URL}/auth/local`,
      requestBody
    );

    const { jwt, user }: ILoginResponseBody = response.data;
    dispatch(storeCurrentUser({
      id: user.id,
      email: user.email,
      displayName: user.display_name
    }));
    dispatch(storeToken(jwt));
  };
};

const storeToken = (accessToken: string): StoreAccessTokenAction => ({
  type: STORE_ACCESS_TOKEN,
  accessToken
});

export const clearCurrentUser = (): ClearCurrentUserAction => ({
  type: CLEAR_CURRENT_USER
});

export const clearAccessToken = (): ClearAccessTokenAction => ({
  type: CLEAR_ACCESS_TOKEN
});

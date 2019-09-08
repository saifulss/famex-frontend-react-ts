import { User } from "../user/types";
import { Action } from "redux";

// types of actions you want to support, for this domain
export const ATTEMPT_AUTHENTICATION = "ATTEMPT_AUTHENTICATION";
export const STORE_CURRENT_USER = "STORE_CURRENT_USER";
export const STORE_ACCESS_TOKEN = "STORE_ACCESS_TOKEN";

// all the interfaces describing the shapes of actions you want to support, for this domain
export interface AttemptAuthenticationAction extends Action<string> {
  type: typeof ATTEMPT_AUTHENTICATION;
}

export interface StoreCurrentUserAction extends Action<string> {
  type: typeof STORE_CURRENT_USER;
  currentUser: User;
}

export interface StoreAccessTokenAction extends Action<string> {
  type: typeof STORE_ACCESS_TOKEN;
  accessToken: string;
}

export type AuthActionTypes =
  | AttemptAuthenticationAction
  | StoreCurrentUserAction
  | StoreAccessTokenAction;

// the slice of state that you want, for this domain
export interface AuthState {
  currentUser?: User;
  accessToken?: string;
}

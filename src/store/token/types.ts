export const AUTHENTICATE = "AUTHENTICATE";
export const STORE_TOKEN = "STORE_TOKEN";

export interface AuthenticateAction {
  type: typeof AUTHENTICATE;
}

export interface StoreTokenAction {
  type: typeof STORE_TOKEN;
  token: string
}

export interface TokenState {
  token?: string
}

export type TokenActionTypes = AuthenticateAction | StoreTokenAction;
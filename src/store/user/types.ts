export interface User {
  displayName: string,
  email: string
}

export interface UserState {
  currentUser?: User;
  users: User[];
}

export const FETCH_USERS = "FETCH_USERS";
export const UPDATE_FETCHED_USERS = "UPDATE_FETCHED_USERS";
export const STORE_CURRENT_USER = "STORE_CURRENT_USER";

export interface FetchUsersAction {
  type: typeof FETCH_USERS;
}

interface UpdateFetchedUsersAction {
  type: typeof UPDATE_FETCHED_USERS;
  users: User[];
}

interface StoreCurrentUserAction {
  type: typeof STORE_CURRENT_USER,
  currentUser: User
}

export type UserActionTypes = FetchUsersAction | UpdateFetchedUsersAction | StoreCurrentUserAction; // used for typing at reducers
export interface UserResponse {
  id: number;
  email: string;
  display_name: string;
}

export interface User {
  id: number;
  email: string;
  displayName: string;
}

export interface UserState {
  currentUser?: User;
  users: User[];
}

export const FETCH_USERS = "FETCH_USERS";
export const UPDATE_FETCHED_USERS = "UPDATE_FETCHED_USERS";

export interface FetchUsersAction {
  type: typeof FETCH_USERS;
}

interface UpdateFetchedUsersAction {
  type: typeof UPDATE_FETCHED_USERS;
  users: User[];
}

export type UserActionTypes = FetchUsersAction | UpdateFetchedUsersAction; // used for typing at reducers

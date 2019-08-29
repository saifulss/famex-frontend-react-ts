export interface User {
  displayName: string,
  email: string
}

export interface UserState {
  users: User[]
}

export const FETCH_USERS = "FETCH_USERS";

export interface FetchUsersAction {
  type: typeof FETCH_USERS;
  users: User[];
}

// export const FETCH_USER = "FETCH_USER";
// export interface FetchUserAction {
//   type: typeof FETCH_USER;
//   userId: number
// }

export type UserActionTypes = /*FetchUserAction |*/ FetchUsersAction; // used for typing at reducers
// shape of an instance of this domain slice "users
export interface User {
  id: number,
  displayName: string,
  email: string
}

// shape of Redux state representing this domain slice "users"
export interface UsersState {
  users: User[];
}

// Redux action type
export const FETCH_USERS = 'FETCH_USERS';

// shape of the action object
interface FetchUsersAction {
  type: typeof FETCH_USERS
  payload: UsersState
}

// final exported union type
export type UserActionTypes = FetchUsersAction
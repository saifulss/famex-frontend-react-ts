import {FETCH_USERS, FetchUsersAction, User} from "./types";

export const fetchUsers = (users: User[]): FetchUsersAction => ({
  type: FETCH_USERS,
  users
});
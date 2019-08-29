import {FETCH_USERS, UserActionTypes, UsersState} from './types'

export function fetchUsers(users: UsersState): UserActionTypes {
  return {
    type: FETCH_USERS,
    payload: users
  }
}
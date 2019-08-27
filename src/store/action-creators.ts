import {ACTION_TYPES} from "./actions";

// export const createExpenseClaim = () => ({
//   type: ACTION_TYPES.CREATE_EXPENSE_CLAIM,
// });

export interface FetchUsersPayload {
  users: object[]
}

export interface fetchUsers {
  type: string,
  payload: string
}

export const fetchUsers = (someCode: string): fetchUsers => {
  console.log('action creator will return action now');
  return {
    type: ACTION_TYPES.FETCH_USERS,
    payload: someCode
  };
};

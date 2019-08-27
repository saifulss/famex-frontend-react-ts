const FETCH_EXPENSE_CLAIMS = "FETCH_EXPENSE_CLAIMS";
const FETCH_EXPENSE_CLAIM = "FETCH_EXPENSE_CLAIM";
const CREATE_EXPENSE_CLAIM = "CREATE_EXPENSE_CLAIM";

const FETCH_USERS = "FETCH_USERS";

export const ACTION_TYPES = {
  FETCH_EXPENSE_CLAIM,
  FETCH_EXPENSE_CLAIMS,
  CREATE_EXPENSE_CLAIM,
  FETCH_USERS,
};

export interface Action {
  type: string,
  payload: object
}
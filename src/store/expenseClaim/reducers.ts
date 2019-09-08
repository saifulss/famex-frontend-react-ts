import { ExpenseClaimActionTypes, ExpenseClaimState, STORE_EXPENSE_CLAIMS } from "./types";

const initialState: ExpenseClaimState = {
  expenseClaims: []
};

export const expenseClaimReducer = (
  state = initialState,
  action: ExpenseClaimActionTypes
): ExpenseClaimState => {
  if (action.type === STORE_EXPENSE_CLAIMS) {
    return {
      expenseClaims: action.expenseClaims
    };
  }

  return state;
};

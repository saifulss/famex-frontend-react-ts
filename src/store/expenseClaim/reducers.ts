import { ExpenseClaimActionTypes, ExpenseClaimState, STORE_EXPENSE_CLAIMS } from "./types";
import moment from "moment";

const initialState: ExpenseClaimState = {
  expenseClaims: []
};

export const expenseClaimReducer = (
  state = initialState,
  action: ExpenseClaimActionTypes
): ExpenseClaimState => {
  if (action.type === STORE_EXPENSE_CLAIMS) {
    const sorted = action.expenseClaims.sort((a, b) => {
      if (a.createdAt < b.createdAt) return -1;
      if (a.createdAt > b.createdAt) return 1;

      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;

      return 0;
    });

    return {
      expenseClaims: sorted.map(ec => {
        return {
          ...ec,
          createdAt: moment.utc(ec.createdAt).local().toDate()
        };
      })
    };
  }

  return state;
};

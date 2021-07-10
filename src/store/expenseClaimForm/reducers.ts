import {
  CLEAR_EXPENSE_CLAIM_FORM,
  ExpenseClaimFormActionTypes,
  ExpenseClaimFormState,
  UPDATE_EXPENSE_CLAIM_FORM
} from "./types";

const initialState: ExpenseClaimFormState = {
  amount: 0,
  description: ''
};

export const expenseClaimFormReducer = (
  state = initialState,
  action: ExpenseClaimFormActionTypes
): ExpenseClaimFormState => {
  if (action.type === UPDATE_EXPENSE_CLAIM_FORM) {
    return {
      amount: action.payload.amount,
      description: action.payload.description
    };
  }

  if (action.type === CLEAR_EXPENSE_CLAIM_FORM) {
    return {
      ...state,
      amount: undefined,
      description: ''
    };
  }

  return state;
};

import {
  CLEAR_EXPENSE_CLAIM_FORM,
  ExpenseClaimFormActionTypes,
  ExpenseClaimFormState,
  UPDATE_EXPENSE_CLAIM_FORM
} from "./types";

const initialState: ExpenseClaimFormState = {
  currency: undefined,
  amount: undefined,
  category: undefined,
  description: undefined
};

export const expenseClaimFormReducer = (
  state = initialState,
  action: ExpenseClaimFormActionTypes
): ExpenseClaimFormState => {
  if (action.type === UPDATE_EXPENSE_CLAIM_FORM) {
    return {
      currency: action.payload.currency,
      amount: action.payload.amount,
      category: action.payload.category,
      description: action.payload.description
    };
  }

  if (action.type === CLEAR_EXPENSE_CLAIM_FORM) {
    return {
      ...state,
      amount: undefined,
      category: undefined,
      description: undefined
    };
  }

  return state;
};

// types of actions you want to support, for this domain
export const UPDATE_EXPENSE_CLAIM_FORM = "UPDATE_EXPENSE_CLAIM_FORM";

export interface ExpenseClaimFormModel {
  currency: string;
  amount: number;
  category: string;
  description: string;
}

// all the interfaces describing the shapes of actions you want to support, for this domain
export interface UpdateExpenseClaimForm {
  type: typeof UPDATE_EXPENSE_CLAIM_FORM;
  payload: ExpenseClaimFormModel
}

export type ExpenseClaimFormActionTypes = UpdateExpenseClaimForm;

// the slice of state that you want, for this domain
export interface ExpenseClaimFormState {
  currency?: string;
  amount?: number;
  category?: string;
  description?: string;
}
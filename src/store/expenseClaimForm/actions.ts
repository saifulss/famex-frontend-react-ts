import { ExpenseClaimFormModel, UPDATE_EXPENSE_CLAIM_FORM, UpdateExpenseClaimForm } from "./types";

export function updateExpenseClaimForm(
  expenseClaimFormModel: ExpenseClaimFormModel
): UpdateExpenseClaimForm {
  return {
    type: UPDATE_EXPENSE_CLAIM_FORM,
    payload: expenseClaimFormModel
  };
}

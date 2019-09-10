import { ExpenseClaimFormModel, UPDATE_EXPENSE_CLAIM_FORM, UpdateExpenseClaimForm } from "./types";
import { Dispatch } from "redux";
import { AppState } from "../rootReducer";
import axios from "axios";
import { ApiConstants } from "../../constants/ApiConstants";
import { fetchExpenseClaims } from "../expenseClaim/actions";

export function updateExpenseClaimForm(
  expenseClaimFormModel: ExpenseClaimFormModel
): UpdateExpenseClaimForm {
  return {
    type: UPDATE_EXPENSE_CLAIM_FORM,
    payload: expenseClaimFormModel
  };
}

// thunk
export function submitExpenseClaim(): any {
  return async (dispatch: Dispatch, getState: () => AppState) => {
    const { amount, category, description, currency } = getState().expenseClaimForm;

    await axios.post(
      `${ApiConstants.BASE_URL}/expense-claims`,
      {
        amount,
        categoryId: category,
        currency,
        description
      },
      {
        headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`
        }
      }
    );

    dispatch(fetchExpenseClaims());
  };
}
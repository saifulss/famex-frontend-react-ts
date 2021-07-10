import {
  CLEAR_EXPENSE_CLAIM_FORM,
  ClearExpenseClaimForm,
  ExpenseClaimFormModel,
  UPDATE_EXPENSE_CLAIM_FORM,
  UpdateExpenseClaimForm
} from "./types";
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

export function clearExpenseClaimForm(): ClearExpenseClaimForm {
  return {
    type: CLEAR_EXPENSE_CLAIM_FORM
  };
}

// thunk
export function submitExpenseClaim(): any {
  return async (dispatch: Dispatch, getState: () => AppState) => {
    const { amount, description } = getState().expenseClaimForm;

    if (!amount) throw new Error("Amount is falsy.");

    if (!getState().auth.currentUser) {
      return;
    }

    await axios.post(
      `${ApiConstants.BASE_URL}/expense-claims`,
      {
        amount_in_cents: amount * 100,
        description,
        claimant: getState().auth.currentUser!!.id
      },
      {
        headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`
        }
      }
    );

    dispatch(clearExpenseClaimForm());
    dispatch(fetchExpenseClaims());
  };
}

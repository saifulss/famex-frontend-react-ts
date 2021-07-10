import { ExpenseClaim, ExpenseClaimResponse, STORE_EXPENSE_CLAIMS, StoreExpenseClaimsAction } from "./types";
import axios from "axios";
import { ApiConstants } from "../../constants/ApiConstants";
import { Dispatch } from "redux";
import { AppState } from "../rootReducer";

// thunk
export function fetchExpenseClaims(): any {
  // todo: figure out how to properly type returns of thunk actions
  return async (dispatch: Dispatch, getState: () => AppState) => {
    const response = await axios.get(
      `${ApiConstants.BASE_URL}/expense-claims`,
      {
        headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`
        }
      }
    );

    const expenseClaims: ExpenseClaim[] = response.data.map((item: ExpenseClaimResponse) => ({
      id: item.id,
      amount: item.amount_in_cents,
      description: item.description,
      createdAt: item.created_at,
      claimant: item.claimant
    }));

    dispatch(storeExpenseClaims(expenseClaims));
  };
}

function storeExpenseClaims(
  expenseClaims: ExpenseClaim[]
): StoreExpenseClaimsAction {
  return {
    type: STORE_EXPENSE_CLAIMS,
    expenseClaims
  };
}

// // todo: externalize the adding of auth headers for DRY's sake
// export function updateExpenseClaim(expenseClaim: ExpenseClaim): any {
//   return async (dispatch: Dispatch, getState: () => AppState) => {
//     const response = await axios.put(
//       `${ApiConstants.BASE_URL}/expense-claims/${expenseClaim.id}`,
//       {
//         name: expenseClaim.name,
//         amount: expenseClaim.amount
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${getState().auth.accessToken}`
//         }
//       }
//     );
//
//     console.log(response);
//
//     dispatch(fetchExpenseClaims());
//   };
// }

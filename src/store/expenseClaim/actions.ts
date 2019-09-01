import {ExpenseClaim, STORE_EXPENSE_CLAIMS} from "./types";
import axios from 'axios';
import {ApiConstants} from "../../constants/ApiConstants";
import {Dispatch} from "redux";
import {AppState} from "../rootReducer";

// thunk
export function fetchExpenseClaims() {
  return async (dispatch: Dispatch, getState: () => AppState) => {
    const response = await axios.get(`${ApiConstants.BASE_URL}/expense-claims`, {
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`
      }
    });

    dispatch(storeExpenseClaims(response.data));
  }
}

function storeExpenseClaims(expenseClaims: ExpenseClaim[]) {
  return {
    type: STORE_EXPENSE_CLAIMS,
    expenseClaims
  };
}
import { User, UserResponse } from "../user/types";

export interface ExpenseClaimResponse {
  id: number;
  description: string;
  amount_in_cents: number;
  created_at: Date;
  claimant: UserResponse;
}

export interface ExpenseClaim {
  id: number;
  amount: number;
  // category: Category;
  description: string;
  claimant: User;
  settledAt: Date;
  createdAt: Date;
}

export interface Category {
  id: number;
  name: string;
}

// types of actions you want to support, for this domain
export const FETCH_EXPENSE_CLAIMS = "FETCH_EXPENSE_CLAIMS";
export const STORE_EXPENSE_CLAIMS = "STORE_EXPENSE_CLAIMS";
export const UPDATE_EXPENSE_CLAIM = "UPDATE_EXPENSE_CLAIM"; // for when the user wants to correct typos
export const SET_EXPENSE_CLAIM_AS_SETTLED = "SET_EXPENSE_CLAIM_AS_SETTLED"; // for when the user wants to mark a bunch of ECs as settled

// all the interfaces describing the shapes of actions you want to support, for this domain
export interface FetchExpenseClaimsAction {
  type: typeof FETCH_EXPENSE_CLAIMS;
}

export interface StoreExpenseClaimsAction {
  type: typeof STORE_EXPENSE_CLAIMS;
  expenseClaims: ExpenseClaim[];
}

export interface UpdateExpenseClaimAction {
  type: typeof UPDATE_EXPENSE_CLAIM;
  payload: {
    expenseClaim: ExpenseClaim;
  };
}

export type ExpenseClaimActionTypes =
  | FetchExpenseClaimsAction
  | StoreExpenseClaimsAction
  | UpdateExpenseClaimAction;

// the slice of state that you want, for this domain
export interface ExpenseClaimState {
  expenseClaims: ExpenseClaim[];
}

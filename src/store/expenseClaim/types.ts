import {User} from "../user/types";

export interface ExpenseClaim {
  id: number;
  name: string;
  payer: User;
  amount: number;
  settledAt: Date;
  createdAt: Date;
}

// types of actions you want to support, for this domain
export const FETCH_EXPENSE_CLAIMS = "FETCH_EXPENSE_CLAIMS";
export const STORE_EXPENSE_CLAIMS = "STORE_EXPENSE_CLAIMS";

// all the interfaces describing the shapes of actions you want to support, for this domain
export interface FetchExpenseClaimsAction {
  type: typeof FETCH_EXPENSE_CLAIMS;
}

export interface StoreExpenseClaimsAction {
  type: typeof STORE_EXPENSE_CLAIMS;
  expenseClaims: ExpenseClaim[];
}

export type ExpenseClaimActionTypes = FetchExpenseClaimsAction | StoreExpenseClaimsAction;

// the slice of state that you want, for this domain
export interface ExpenseClaimState {
  expenseClaims: ExpenseClaim[];
}
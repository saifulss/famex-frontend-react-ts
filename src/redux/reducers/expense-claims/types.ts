export interface ExpenseClaim {
  name: string,
  amount: number,
}

export interface ExpenseClaimsState {
  expenseClaims: ExpenseClaim[]
}

export const CREATE_NEW_CLAIM = 'CREATE_NEW_CLAIM';
export const FETCH_CLAIMS = 'FETCH_CLAIMS';

interface CreateClaimAction {
  type: typeof CREATE_NEW_CLAIM
  payload: ExpenseClaim
}

interface FetchClaimsAction {
  type: typeof FETCH_CLAIMS
  meta: {
    timestamp: number
  }
}

export type ExpenseClaimActionTypes = CreateClaimAction | FetchClaimsAction
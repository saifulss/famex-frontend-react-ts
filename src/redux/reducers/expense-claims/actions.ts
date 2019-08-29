import {CREATE_NEW_CLAIM, ExpenseClaim, ExpenseClaimActionTypes, FETCH_CLAIMS} from './types'

// TypeScript infers that this function is returning SendMessageAction
export function createNewClaim(newClaim: ExpenseClaim): ExpenseClaimActionTypes {
  return {
    type: CREATE_NEW_CLAIM,
    payload: newClaim
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function fetchClaims(timestamp: number): ExpenseClaimActionTypes {
  return {
    type: FETCH_CLAIMS,
    meta: {
      timestamp
    }
  }
}
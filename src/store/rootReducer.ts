import {combineReducers} from "redux";
import {authReducer} from "./auth/reducers";
import {expenseClaimFormReducer} from "./expenseClaimForm/reducers";
import {expenseClaimReducer} from "./expenseClaim/reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  expenseClaim: expenseClaimReducer,
  expenseClaimForm: expenseClaimFormReducer,
});

export type AppState = ReturnType<typeof rootReducer>
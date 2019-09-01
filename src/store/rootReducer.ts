import {combineReducers} from "redux";
import {authReducer} from "./auth/reducers";
import {expenseClaimReducer} from "./expenseClaim/reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  expenseClaim: expenseClaimReducer,
});

export type AppState = ReturnType<typeof rootReducer>
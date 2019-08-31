import {combineReducers} from "redux";
import {userReducer} from "./user/reducers";
import {authReducer} from "./auth/reducers";

export const rootReducer = combineReducers({
  user: userReducer,
  token: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>
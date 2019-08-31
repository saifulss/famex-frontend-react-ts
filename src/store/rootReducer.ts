import {combineReducers} from "redux";
import {userReducer} from "./user/reducers";
import {tokenReducer} from "./token/reducers";

export const rootReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
});

export type AppState = ReturnType<typeof rootReducer>
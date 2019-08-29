import {combineReducers} from "redux";
import {userReducer} from "./user/reducers";

export const rootReducer = combineReducers({
  user: userReducer
});

export type AppState = ReturnType<typeof rootReducer>
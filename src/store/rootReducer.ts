import {combineReducers} from "redux";
import {systemReducer} from "./system/reducers";
import {chatReducer} from "./chat/reducers";
import {userReducer} from "./user/reducers";

export const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
  user: userReducer
});

export type AppState = ReturnType<typeof rootReducer>
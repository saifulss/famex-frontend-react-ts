import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./rootReducer";

const middlewares = [thunkMiddleware];

const storeEnhancer = applyMiddleware(...middlewares);

export const store = createStore(
  rootReducer,
  composeWithDevTools(storeEnhancer)
);
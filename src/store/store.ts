import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from '../reducers/reducers';

export interface InitialReduxStoreState {
  users: object[]
  someMeta: string
}

export const initialReduxStoreState: InitialReduxStoreState = {
  users: [],
  someMeta: ''
};

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(thunk)),
);

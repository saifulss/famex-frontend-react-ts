import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: localStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunkMiddleware];

const storeEnhancer = applyMiddleware(...middlewares);

export const configureAndCreateStore = () => {
  const store = createStore(persistedReducer, composeWithDevTools(storeEnhancer));
  const persistor = persistStore(store);
  return { store, persistor };
};

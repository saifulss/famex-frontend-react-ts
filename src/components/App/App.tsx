import React from "react";
import "./App.css";
import { Route, Router, Switch } from "react-router";
import { ExpenseClaimsView } from "../../views/ExpenseClaimsView";
import { createBrowserHistory } from "history";
import { HomeView } from "../../views/HomeView/HomeView";
import { Error404View } from "../../views/Error404View";
import { Provider } from "react-redux";
import { configureAndCreateStore } from "../../store/store";
import { AuthenticatedBaseView } from "../../views/AuthenticatedBaseView";
import { LoginView } from "../../views/LoginView";
import { SignIn } from "../../views/Login";
import { CssBaseline } from "@material-ui/core";
import { PersistGate } from "redux-persist/integration/react";

const history = createBrowserHistory();

const { store, persistor } = configureAndCreateStore();

export const App: React.FC = () => (
  <Router history={history}>
    <CssBaseline />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Switch>
          <Route exact path="/" render={() => <HomeView />} />
          <Route path="/login" component={LoginView} />
          <Route
            exact
            path="/expense-claims"
            render={() => (
              <AuthenticatedBaseView component={<ExpenseClaimsView />} />
            )}
          />
          <Route path="/test" render={() => <SignIn />} />
          <Route path="*" render={() => <Error404View />} />
        </Switch>
      </PersistGate>
    </Provider>
  </Router>
);

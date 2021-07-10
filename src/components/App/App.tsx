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
import { CssBaseline } from "@material-ui/core";
import { PersistGate } from "redux-persist/integration/react";
import { RouteConstants } from "../../constants/RouteConstants";

const history = createBrowserHistory();

const { store, persistor } = configureAndCreateStore();

export const App: React.FC = () => (
  <Router history={history}>
    <CssBaseline />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Switch>
          <Route exact path={RouteConstants.HOME} render={() => <HomeView />} />
          <Route path={RouteConstants.LOGIN} component={LoginView} />
          <Route
            exact
            path={RouteConstants.EXPENSE_CLAIMS}
            render={() => (
              <AuthenticatedBaseView component={<ExpenseClaimsView />} />
            )}
          />
          <Route path="*" render={() => <Error404View />} />
        </Switch>
      </PersistGate>
    </Provider>
  </Router>
);

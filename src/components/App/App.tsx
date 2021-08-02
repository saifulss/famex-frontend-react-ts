import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import { ExpenseClaimsView } from "../../views/ExpenseClaimsView";
import { HomeView } from "../../views/HomeView/HomeView";
import { Error404View } from "../../views/Error404View";
import { Provider } from "react-redux";
import { configureAndCreateStore } from "../../store/store";
import { AuthenticatedBaseView } from "../../views/AuthenticatedBaseView";
import { LoginView } from "../../views/LoginView";
import { CssBaseline } from "@material-ui/core";
import { RouteConstants } from "../../constants/RouteConstants";
import { BrowserRouter } from "react-router-dom";

const { store } = configureAndCreateStore();

export const App: React.FC = () => (
  <BrowserRouter>
    <CssBaseline />
    <Provider store={store}>
      <Switch>
        <Route exact path={RouteConstants.HOME} render={() => <HomeView />} />
        <Route exact path={RouteConstants.LOGIN} component={LoginView} />
        <Route
          exact
          path={RouteConstants.EXPENSE_CLAIMS}
          render={() => (
            <AuthenticatedBaseView component={<ExpenseClaimsView />} />
          )}
        />
        <Route path="*" render={() => <Error404View />} />
      </Switch>
    </Provider>
  </BrowserRouter>
);

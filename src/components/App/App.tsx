import React from 'react';
import './App.css';
import {Route, Router, Switch} from "react-router";
import {ExpenseClaimsView} from "../../views/ExpenseClaimsView";
import {createBrowserHistory} from 'history';
import {HomeView} from "../../views/HomeView";
import {Error404View} from "../../views/Error404View"
import {Provider} from "react-redux";
import {store} from "../../store/store";
import {AuthenticatedBaseView} from "../../views/AuthenticatedBaseView";
import {LoginView} from "../../views/LoginView";

const history = createBrowserHistory();

export const App: React.FC = () => (
  <Router history={history}>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" render={() => <HomeView/>}/>
        <Route path="/login" component={LoginView}/>
        <Route exact path="/expense-claims" render={() => <AuthenticatedBaseView component={<ExpenseClaimsView/>}/>}/>
        <Route path="*" render={() => <Error404View/>}/>
      </Switch>
    </Provider>
  </Router>
);
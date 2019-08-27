import React from 'react';
import './App.css';
import {Route, Router, Switch} from "react-router";
import {ExpenseClaimsView} from "../../views/ExpenseClaimsView";
import {createBrowserHistory} from 'history';
import {ViewExpenseClaimView, ViewExpenseClaimViewProps} from "../../views/ViewExpenseClaimView";
import {HomeView} from "../../views/HomeView";
import {CreateExpenseClaimView} from "../../views/CreateExpenseClaimView";
import {Error404View} from "../../views/Error404View";
import {Provider} from "react-redux";
import {store} from '../../store/store';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => <HomeView/>}/>
          <Route exact path="/expense-claims" render={() => <ExpenseClaimsView/>}/>
          <Route path="/expense-claims/:id"
                 render={(props: ViewExpenseClaimViewProps) => <ViewExpenseClaimView {...props}/>}/>
          <Route exact path="/expense-claims/create" render={() => <CreateExpenseClaimView/>}/>
          <Route path="*" render={() => <Error404View/>}/>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

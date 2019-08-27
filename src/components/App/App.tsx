import React from 'react';
import './App.css';
import {Route, Router, Switch} from "react-router";
import {ExpenseClaimsView} from "../../views/ExpenseClaimsView";
import {createBrowserHistory} from 'history';
import {ViewExpenseClaimView, ViewExpenseClaimViewProps} from "../../views/ViewExpenseClaimView";
import {HomeView} from "../../views/HomeView";
import {CreateExpenseClaimView} from "../../views/CreateExpenseClaimView";
import {Error404View} from "../../views/Error404View";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
};

export default App;

import React, {Component} from 'react';
import './App.css';
import {Route, Router, Switch} from "react-router";
import {ExpenseClaimsView} from "../../views/ExpenseClaimsView";
import {createBrowserHistory} from 'history';
import {ViewExpenseClaimView, ViewExpenseClaimViewProps} from "../../views/ViewExpenseClaimView";
import {HomeView} from "../../views/HomeView";
import {CreateExpenseClaimView} from "../../views/CreateExpenseClaimView";
import {Error404View} from "../../views/Error404View";
import {connect} from "react-redux";
import {AppState} from "../../store";
import {ChatState} from "../../store/chat/types";
import {SystemState} from "../../store/system/types";
import {updateSession} from '../../store/system/actions';
import {sendMessage} from '../../store/chat/actions';

const history = createBrowserHistory();

interface AppProps {
  sendMessage: typeof sendMessage
  updateSession: typeof updateSession
  chat: ChatState
  system: SystemState
}

class BaseApp extends Component<AppProps> {
  render() {
    return (
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
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  system: state.system,
  chat: state.chat
});

const mapDispatchToProps = (dispatch: any) => ({
  sendMessage: dispatch(sendMessage),
  updateSession: dispatch(sendMessage)
});

export const App = connect(mapStateToProps, mapDispatchToProps)(BaseApp);
// export const App = connect(mapStateToProps, {sendMessage, updateSession})(BaseApp);
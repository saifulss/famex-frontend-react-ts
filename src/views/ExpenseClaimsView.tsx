import * as React from 'react';
import {connect} from "react-redux";
import {ExpenseClaim} from "../components/ExpenseClaim/ExpenseClaim";
import {ExpenseClaim as ExpenseClaimModel} from "../store/expenseClaim/types";
import {AppState} from "../store/rootReducer";
import {fetchExpenseClaims} from "../store/expenseClaim/actions";

interface ExpenseClaimsViewProps {
  expenseClaims: ExpenseClaimModel[];
  fetchExpenseClaims: () => void;
}

class BaseExpenseClaimsView extends React.Component<ExpenseClaimsViewProps> {
  componentDidMount(): void {
    this.props.fetchExpenseClaims();
  }

  render() {
    return (
      <div>
        {this.props.expenseClaims.map(expenseClaim => <ExpenseClaim expenseClaim={expenseClaim}
                                                                    key={expenseClaim.id}/>)}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  expenseClaims: state.expenseClaim.expenseClaims
});

const mapDispatchToProps = {fetchExpenseClaims};

// todo: prop the connect<>() call
export const ExpenseClaimsView = connect(mapStateToProps, mapDispatchToProps)(BaseExpenseClaimsView);
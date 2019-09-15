import * as React from "react";
import List from "@material-ui/core/List";
import { AppState } from "../../store/rootReducer";
import { ExpenseClaim as ExpenseClaimModel } from "../../store/expenseClaim/types";
import { connect } from "react-redux";
import { ExpenseClaim } from "../ExpenseClaim/ExpenseClaim";

interface ExpenseClaimsListProps {
  expenseClaims: ExpenseClaimModel[];
  style?: object;
}

const BaseExpenseClaimsList = (props: ExpenseClaimsListProps) => (
  <List dense={true} style={{ ...props.style }}>
    {props.expenseClaims.map(ec => (
      <ExpenseClaim expenseClaim={ec} key={ec.id} />
    ))}
  </List>
);

const mapStateToProps = (state: AppState) => ({
  expenseClaims: state.expenseClaim.expenseClaims
});

export const ExpenseClaimsList = connect(mapStateToProps)(
  BaseExpenseClaimsList
);

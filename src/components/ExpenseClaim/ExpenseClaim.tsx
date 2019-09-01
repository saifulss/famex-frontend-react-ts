import * as React from 'react';
import {ExpenseClaim as ExpenseClaimModel} from "../../store/expenseClaim/types";

interface ExpenseClaimProps {
  expenseClaim: ExpenseClaimModel;
}

export const ExpenseClaim = (props: ExpenseClaimProps) => (
  <div>
    <div>{props.expenseClaim.amount} for {props.expenseClaim.name}</div>
    <div>{props.expenseClaim.payer.displayName} at {props.expenseClaim.createdAt}</div>
  </div>
);
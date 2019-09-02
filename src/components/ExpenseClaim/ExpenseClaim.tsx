import * as React from 'react';
import {ExpenseClaim as ExpenseClaimModel} from "../../store/expenseClaim/types";
import {connect} from "react-redux";
import {updateExpenseClaim} from "../../store/expenseClaim/actions";

interface ExpenseClaimProps {
  expenseClaim: ExpenseClaimModel;
  updateExpenseClaim: (expenseClaim: ExpenseClaimModel) => void;
}

const BaseExpenseClaim = (props: ExpenseClaimProps) => {
  const onSave = () => {
    props.updateExpenseClaim(props.expenseClaim)
  };

  return (
    <div>
      <div>{props.expenseClaim.amount} for {props.expenseClaim.name}</div>
      <div>{props.expenseClaim.payer.displayName} at {props.expenseClaim.createdAt}</div>
      <button onClick={onSave}>Save</button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  counter: state.counter
});

const mapDispatchToProps = {updateExpenseClaim};

export const ExpenseClaim = connect(mapStateToProps, mapDispatchToProps)(BaseExpenseClaim);
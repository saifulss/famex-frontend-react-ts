import * as React from "react";
import { ChangeEvent, Dispatch, FormEvent } from "react";
import { connect } from "react-redux";
import { updateExpenseClaimForm } from "../../store/expenseClaimForm/actions";
import { ExpenseClaimFormModel } from "../../store/expenseClaimForm/types";
import { submitExpenseClaim } from "../../store/expenseClaim/actions";
import { AppState } from "../../store/rootReducer";

interface CreateExpenseClaimFormProps {
  expenseClaimForm: ExpenseClaimFormModel;
  updateExpenseClaimForm: (
    expenseClaimFormModel: ExpenseClaimFormModel
  ) => void;
  submitExpenseClaim: () => void;
}

const BaseCreateExpenseClaimForm = (props: CreateExpenseClaimFormProps) => {
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const acceptedInputNames = [
      "currency",
      "amount",
      "category",
      "description"
    ];
    if (!acceptedInputNames.includes(event.target.name))
      throw new Error("Unknown form input name");

    props.updateExpenseClaimForm({
      ...props.expenseClaimForm,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = (event: FormEvent<HTMLButtonElement | HTMLFormElement>) => {
    event.preventDefault();
    props.submitExpenseClaim();
  };

  return (
    <form
      style={{
        border: "solid #cccccc 1px"
      }}
      onSubmit={onSubmit}
    >
      <input
        name="currency"
        placeholder="Currency"
        value={props.expenseClaimForm.currency || ""}
        onChange={onInputChange}
      />
      <input
        name="amount"
        placeholder="Amount"
        value={props.expenseClaimForm.amount || ""}
        onChange={onInputChange}
      />
      <input
        name="category"
        placeholder="Category"
        value={props.expenseClaimForm.category || ""}
        onChange={onInputChange}
      />
      <input
        name="description"
        placeholder="Description"
        value={props.expenseClaimForm.description || ""}
        onChange={onInputChange}
      />
      <button onSubmit={onSubmit} onClick={onSubmit}>
        Create
      </button>
    </form>
  );
};

const mapStateToProps = (state: AppState) => ({
  expenseClaimForm: state.expenseClaimForm
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    updateExpenseClaimForm: (expenseClaimFormModel: ExpenseClaimFormModel) =>
      dispatch(updateExpenseClaimForm(expenseClaimFormModel)),
    submitExpenseClaim: () => dispatch(submitExpenseClaim())
  };
};

export const CreateExpenseClaimForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseCreateExpenseClaimForm);

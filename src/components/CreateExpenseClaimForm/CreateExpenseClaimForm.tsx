import * as React from "react";
import { ChangeEvent, Dispatch, FormEvent } from "react";
import { connect } from "react-redux";
import { submitExpenseClaim, updateExpenseClaimForm } from "../../store/expenseClaimForm/actions";
import { ExpenseClaimFormModel } from "../../store/expenseClaimForm/types";
import { AppState } from "../../store/rootReducer";
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from "@material-ui/core";

interface CreateExpenseClaimFormProps {
  expenseClaimForm: ExpenseClaimFormModel;
  updateExpenseClaimForm: (
    expenseClaimFormModel: ExpenseClaimFormModel
  ) => void;
  submitExpenseClaim: () => void;
}

const BaseCreateExpenseClaimForm = (props: CreateExpenseClaimFormProps) => {
  const onInputChange = (
    event: ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    console.log(event.target);

    if (event.target.name === undefined)
      throw new Error("Unknown form input name");
    const acceptedInputNames = [
      "currency",
      "amount",
      "category",
      "description"
    ];
    if (!acceptedInputNames.includes(event.target.name))
      throw new Error(`Unknown form input name ${event.target.name}`);

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
    <Paper style={{ padding: "8px" }}>
      <form onSubmit={onSubmit}>
        <div style={{ display: "flex" }}>
          <FormControl
            variant="outlined"
            style={{ flexGrow: 1, minWidth: "150px" }}
          >
            <InputLabel htmlFor="currency">Currency</InputLabel>
            <Select
              inputProps={{ name: "currency" }}
              value={props.expenseClaimForm.currency || ""}
              onChange={onInputChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="SGD">SGD</MenuItem>
              <MenuItem value="MYR">MYR</MenuItem>
            </Select>
          </FormControl>

          <FormControl style={{ flexGrow: 1, marginLeft: "8px" }}>
            <TextField
              label="Amount"
              variant="outlined"
              inputProps={{ name: "amount" }}
              onChange={onInputChange}
              value={props.expenseClaimForm.amount}
            />
          </FormControl>
        </div>

        <div style={{ display: "flex", marginTop: "8px" }}>
          <FormControl variant="outlined" style={{ flexGrow: 1 }}>
            <InputLabel htmlFor="category">Category</InputLabel>
            <Select
              inputProps={{ name: "category" }}
              value={props.expenseClaimForm.category || ""}
              onChange={onInputChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Cab</MenuItem>
              <MenuItem value={2}>Groceries</MenuItem>
              <MenuItem value={3}>Diapers</MenuItem>
            </Select>
          </FormControl>

          <FormControl style={{ flexGrow: 1, marginLeft: "8px" }}>
            <TextField
              label="Description"
              variant="outlined"
              inputProps={{ name: "description" }}
              value={props.expenseClaimForm.description}
              onChange={onInputChange}
            />
          </FormControl>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            marginTop: "8px"
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onSubmit={onSubmit}
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </Paper>
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

import * as React from "react";
import { ChangeEvent, Dispatch, FormEvent } from "react";
import { connect } from "react-redux";
import { submitExpenseClaim, updateExpenseClaimForm } from "../../store/expenseClaimForm/actions";
import { ExpenseClaimFormModel } from "../../store/expenseClaimForm/types";
import { AppState } from "../../store/rootReducer";
import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput, Paper, TextField } from "@material-ui/core";
import { ExpenseClaimFormValidationError, ExpenseClaimFormValidator } from "../../validators/ExpenseClaimFormValidator";

interface CreateExpenseClaimFormProps {
  expenseClaimForm: ExpenseClaimFormModel;
  updateExpenseClaimForm: (
    expenseClaimFormModel: ExpenseClaimFormModel
  ) => void;
  submitExpenseClaim: () => void;
}

interface CreateExpenseClaimFormState {
  formErrors: ExpenseClaimFormValidationError[];
}

class BaseCreateExpenseClaimForm extends React.Component<CreateExpenseClaimFormProps,
  CreateExpenseClaimFormState> {
  constructor(props: CreateExpenseClaimFormProps) {
    super(props);

    this.state = {
      formErrors: []
    };
  }

  onInputChange = (event: ChangeEvent<{ name?: string; value: unknown }>) => {
    if (event.target.name === undefined) throw new Error("Unknown form input name");
    const acceptedInputNames = [
      "currency",
      "amount",
      "category",
      "description"
    ];
    if (!acceptedInputNames.includes(event.target.name))
      throw new Error(`Unknown form input name ${event.target.name}`);

    this.props.updateExpenseClaimForm({
      ...this.props.expenseClaimForm,
      [event.target.name]: event.target.value
    });
  };

  onSubmit = (event: FormEvent<HTMLButtonElement | HTMLFormElement>) => {
    event.preventDefault();
    const formValidator = new ExpenseClaimFormValidator(
      this.props.expenseClaimForm
    );
    formValidator.validate();
    this.setState({
      formErrors: formValidator.errors
    }, () => {
      if (this.state.formErrors.length === 0) this.props.submitExpenseClaim();
    });
  };

  hasError = (field: string) => {
    return this.state.formErrors.filter(e => e.field === field).length !== 0;
  };

  render() {
    return (
      <Paper style={{ padding: "8px" }}>
        <form onSubmit={this.onSubmit}>
          <div style={{ display: "flex" }}>
            {/*<FormControl*/}
            {/*  error={this.hasError("category")}*/}
            {/*  variant="outlined"*/}
            {/*  style={{ flexGrow: 1 }}*/}
            {/*>*/}
            {/*  <InputLabel htmlFor="category">Category</InputLabel>*/}
            {/*  <Select*/}
            {/*    inputProps={{ name: "category" }}*/}
            {/*    value={this.props.expenseClaimForm.category || ""}*/}
            {/*    onChange={this.onInputChange}*/}
            {/*  >*/}
            {/*    <MenuItem value="">*/}
            {/*      <em>None</em>*/}
            {/*    </MenuItem>*/}
            {/*    <MenuItem value={1}>Cab</MenuItem>*/}
            {/*    <MenuItem value={2}>Groceries</MenuItem>*/}
            {/*    <MenuItem value={3}>Diapers</MenuItem>*/}
            {/*  </Select>*/}
            {/*</FormControl>*/}

            <FormControl style={{ flexGrow: 1 }}>
              <TextField
                label="Description"
                variant="outlined"
                inputProps={{ name: "description" }}
                value={this.props.expenseClaimForm.description || ""}
                onChange={this.onInputChange}
              />
            </FormControl>
          </div>

          <div style={{ display: "flex", marginTop: "8px" }}>
            <FormControl style={{ flexGrow: 1 }} variant={"outlined"}>
              <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                type={"number"}
                value={this.props.expenseClaimForm.amount === undefined ? '' : this.props.expenseClaimForm.amount}
                onChange={this.onInputChange}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                name={"amount"}
                error={this.hasError("amount")}
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
              onSubmit={this.onSubmit}
              onClick={this.onSubmit}
            >
              Create
            </Button>
          </div>
        </form>
      </Paper>
    );
  }
}

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

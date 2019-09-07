import * as React from 'react';
import {ChangeEvent, Component, Dispatch, FormEvent} from 'react';
import {connect} from "react-redux";
import {updateExpenseClaimForm} from "../../store/expenseClaimForm/actions";
import {ExpenseClaimFormModel} from "../../store/expenseClaimForm/types";
import {submitExpenseClaim} from "../../store/expenseClaim/actions";

interface CreateExpenseClaimFormProps {
  initialFormValue?: ExpenseClaimFormModel;
  updateExpenseClaimForm: (expenseClaimFormModel: ExpenseClaimFormModel) => void;
  submitExpenseClaim: () => void;
}

interface CreateExpenseClaimFormState {
  currency: string;
  amount: number;
  category: string;
  description: string;
}

class BaseCreateExpenseClaimForm extends Component<CreateExpenseClaimFormProps, CreateExpenseClaimFormState> {
  constructor(props: CreateExpenseClaimFormProps) {
    super(props);

    if (this.props.initialFormValue === undefined) {
      console.log("No initial form value");
      this.state = {
        currency: "SGD",
        amount: 0,
        category: "",
        description: "",
      };
    } else {
      this.state = {
        currency: this.props.initialFormValue.currency,
        amount: this.props.initialFormValue.amount,
        category: this.props.initialFormValue.category,
        description: this.props.initialFormValue.description,
      };
    }
  }

  updateStore = () => {
    this.props.updateExpenseClaimForm({
      currency: this.state.currency,
      amount: this.state.amount,
      category: this.state.category,
      description: this.state.description,
    });
  };

  onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "currency":
        this.setState({currency: event.target.value}, () => this.updateStore());
        break;
      case "amount":
        this.setState({amount: Number.parseInt(event.target.value)}, () => this.updateStore());
        break;
      case "category":
        this.setState({category: event.target.value}, () => this.updateStore());
        break;
      case "description":
        this.setState({description: event.target.value}, () => this.updateStore());
        break;
      default:
        throw new Error("Unknown form input type");
    }
  };

  onSubmit = (event: FormEvent<HTMLButtonElement | HTMLFormElement>) => {
    event.preventDefault();
    console.log("Dispatching API call...");
    this.props.submitExpenseClaim();
  };

  render() {
    return (
      <form style={{
        border: "solid #cccccc 1px"
      }} onSubmit={this.onSubmit}>
        <input name="currency" placeholder="Currency" value={this.state.currency} onChange={this.onInputChange}/>
        <input name="amount" placeholder="Amount" onChange={this.onInputChange}/>
        <input name="category" placeholder="Category" onChange={this.onInputChange}/>
        <input name="description" placeholder="Description" onChange={this.onInputChange}/>
        <button onSubmit={this.onSubmit} onClick={this.onSubmit}>Create</button>
      </form>
    );
  }
}

// const mapStateToProps = (state: AppState) => ({
//   stateItem1: state.storeStateItem1,
// });

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    updateExpenseClaimForm: (expenseClaimFormModel: ExpenseClaimFormModel) => dispatch(updateExpenseClaimForm(expenseClaimFormModel)),
    submitExpenseClaim: () => dispatch(submitExpenseClaim()),
  };
};

export const CreateExpenseClaimForm = connect(null, mapDispatchToProps)(BaseCreateExpenseClaimForm);
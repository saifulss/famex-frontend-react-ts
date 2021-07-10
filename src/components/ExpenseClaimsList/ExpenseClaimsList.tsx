import * as React from "react";
import List from "@material-ui/core/List";
import { AppState } from "../../store/rootReducer";
import { ExpenseClaim as ExpenseClaimModel } from "../../store/expenseClaim/types";
import { connect } from "react-redux";
import { ExpenseClaim } from "../ExpenseClaim/ExpenseClaim";

interface ExpenseClaimsListProps {
  expenseClaims: ExpenseClaimModel[];
  style?: object;
  userDisplayName: string;
}

class BaseExpenseClaimsList extends React.Component<ExpenseClaimsListProps> {
  private readonly endOfList: React.RefObject<HTMLLIElement>;

  constructor(props: ExpenseClaimsListProps) {
    super(props);

    this.endOfList = React.createRef();
  }

  scrollToBottom = () => {
    this.endOfList.current!!.scrollIntoView();
  };

  componentDidMount(): void {
    this.scrollToBottom();
  }

  componentDidUpdate(prevProps: Readonly<ExpenseClaimsListProps>, prevState: Readonly<{}>, snapshot?: any): void {
    if (JSON.stringify(prevProps.expenseClaims) !== JSON.stringify(this.props.expenseClaims)) {
      this.scrollToBottom();
    }
  }

  render() {
    return (
      <List dense={true} style={{ ...this.props.style }}>
        {this.props.expenseClaims.map(ec => (
          <ExpenseClaim expenseClaim={ec} userDisplayName={this.props.userDisplayName} key={ec.id} />
        ))}
        <li ref={this.endOfList} />
      </List>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  expenseClaims: state.expenseClaim.expenseClaims,
  userDisplayName: state.auth.currentUser!!.displayName
});

export const ExpenseClaimsList = connect(mapStateToProps)(
  BaseExpenseClaimsList
);

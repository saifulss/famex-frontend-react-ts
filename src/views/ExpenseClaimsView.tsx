import * as React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import {fetchUsers} from "../store/user/actions";
import {User} from "../store/user/types";

interface ExpenseClaimsViewProps {
  fetchUsers: typeof fetchUsers;
  users: User[];
}

interface ExpenseClaimsState {}

class BaseExpenseClaimsView extends Component<ExpenseClaimsViewProps, ExpenseClaimsState> {
  componentDidMount(): void {
    this.props.fetchUsers([
      {
        displayName: "xxx",
        email: "xxx@xxx.com"
      }
    ]);
  }

  render() {
    if (!this.props.users) return null;

    return (
      <div>
        {this.props.users.map(user => <div>{user.displayName}'s email is: {user.email}</div>)}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  users: state.user.users
});

// const mapDispatchToProps = (dispatch: any) => {
//
// };

const mapDispatchToProps = {fetchUsers};

export const ExpenseClaimsView = connect(mapStateToProps, mapDispatchToProps)(BaseExpenseClaimsView);
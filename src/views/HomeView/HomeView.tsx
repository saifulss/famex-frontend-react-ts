import * as React from "react";
import { Link } from "react-router-dom";
import { User } from "../../store/user/types";
import { connect } from "react-redux";
import { AppState } from "../../store/rootReducer";
import { RouteConstants } from "../../constants/RouteConstants";

interface HomeViewProps {
  currentUser?: User;
}

const BaseHomeView: React.FC<HomeViewProps> = props => {
  return (
    <div>
      <p>Welcome to Famex - the family expenditure tracking app!</p>

      {props.currentUser === undefined && (
        <p>
          To begin, click <Link to={RouteConstants.LOGIN}>here</Link> to sign in.
        </p>
      )}

      {props.currentUser && (
        <p>
          Welcome, {props.currentUser.email}! Click{" "}
          <Link to={RouteConstants.EXPENSE_CLAIMS}>here</Link> to see expense claims.
        </p>
      )}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  currentUser: state.auth.currentUser
});

export const HomeView = connect(mapStateToProps)(BaseHomeView);

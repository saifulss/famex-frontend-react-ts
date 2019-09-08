import * as React from "react";
import { connect } from "react-redux";
import { attemptAuthentication } from "../store/auth/actions";
import { AppState } from "../store/rootReducer";
import { User } from "../store/user/types";
import { Redirect } from "react-router";
import { Container } from "@material-ui/core";
import { FamexAppBar } from "../components/FamexAppBar/FamexAppBar";

interface BaseAuthenticatedViewProps {
  component: React.ReactElement;
  currentUser?: User;
  attemptAuthentication: (username: string, password: string) => void; // todo: extract to its own interface
}

const BaseAuthenticatedBaseView = (props: BaseAuthenticatedViewProps) => {
  if (props.currentUser === undefined) return <Redirect to="/login" />;

  return (
    <Container maxWidth="xs">
      <FamexAppBar />
      <div>{props.component}</div>
    </Container>
  );
};

const mapStateToProps = (state: AppState) => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = { attemptAuthentication };

export const AuthenticatedBaseView = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseAuthenticatedBaseView);

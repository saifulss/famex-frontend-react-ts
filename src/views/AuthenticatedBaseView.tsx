import * as React from "react";
import { connect } from "react-redux";
import { attemptAuthentication } from "../store/auth/actions";
import { AppState } from "../store/rootReducer";
import { User } from "../store/user/types";
import { Redirect } from "react-router";
import { Container, withStyles } from "@material-ui/core";
import { FamexAppBar } from "../components/FamexAppBar/FamexAppBar";

interface BaseAuthenticatedViewProps {
  component: React.ReactElement;
  currentUser?: User;
  attemptAuthentication: (username: string, password: string) => void; // todo: extract to its own interface
  classes: any;
}

const BaseAuthenticatedBaseView = (props: BaseAuthenticatedViewProps) => {
  if (props.currentUser === undefined) return <Redirect to="/login" />;

  const { classes } = props;

  return (
    <Container maxWidth="xs">
      <FamexAppBar />
      <div id="AuthenticatedBaseView__app-bar-vertical-spacer" className={classes.toolbar} />
      <div id="AuthenticatedBaseView__main-content">{props.component}</div>
    </Container>
  );
};

const mapStateToProps = (state: AppState) => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = { attemptAuthentication };

const styles = (theme: any) => ({
  toolbar: theme.mixins.toolbar
});

export const AuthenticatedBaseView = withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BaseAuthenticatedBaseView)
);

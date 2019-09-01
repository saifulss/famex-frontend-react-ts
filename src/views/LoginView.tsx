import * as React from 'react';
import {ChangeEvent, Component} from 'react';
import {connect} from "react-redux";
import {attemptAuthentication} from "../store/auth/actions";
import {AppState} from "../store/rootReducer";
import {User} from "../store/user/types";
import {Redirect} from "react-router";

interface LoginViewProps {
  currentUser: User;
  accessToken: string;
  attemptAuthentication: (username: string, password: string) => void;
}

interface LoginViewState {
  username: string,
  password: string
}

class BaseLoginView extends Component<LoginViewProps, LoginViewState> {
  state = {
    username: "",
    password: ""
  };

  onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value: username} = event.target;
    this.setState({
      username
    });
  };

  onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value: password} = event.target;
    this.setState({
      password
    });
  };

  onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.attemptAuthentication(this.state.username, this.state.password);
  };

  hasLoggedIn = () => {
    return this.props.currentUser !== undefined && this.props.accessToken !== undefined
  };

  render() {
    if (this.hasLoggedIn()) return <Redirect to="/"/>;

    return (
      <form
        onSubmit={this.onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px"
        }}>
        <input value={this.state.username} onChange={this.onUsernameChange} placeholder="Email"/>
        <input type="password" value={this.state.password} onChange={this.onPasswordChange} placeholder="Password"/>
        <input type="submit" value="Sign in"/>
      </form>
    );
  }
}

const mapStateToProps = (state: AppState): any => ({
  currentUser: state.auth.currentUser,
  accessToken: state.auth.accessToken
});

const mapDispatchToProps = {attemptAuthentication};

export const LoginView = connect(mapStateToProps, mapDispatchToProps)(BaseLoginView);
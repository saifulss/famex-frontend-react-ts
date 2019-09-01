import * as React from 'react';
import {connect} from "react-redux";
import {attemptAuthentication} from "../store/auth/actions";

interface BaseAuthenticatedViewProps {
  component: React.ReactElement;
  attemptAuthentication: typeof attemptAuthentication;
}

class BaseAuthenticatedView extends React.Component<BaseAuthenticatedViewProps> {
  componentDidMount(): void {
    this.props.attemptAuthentication("saifulss85@gmail.com", "secret");
  }

  render() {
    return (
      <div>
        {this.props.component}
      </div>
    );
  }
}

const mapDispatchToProps = {attemptAuthentication};

export const AuthenticatedView = connect(null, mapDispatchToProps)(BaseAuthenticatedView);
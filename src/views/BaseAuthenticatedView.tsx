import * as React from 'react';
import {connect} from "react-redux";
import {authenticate} from "../store/token/actions";

interface BaseAuthenticatedViewProps {
  component: React.ReactElement;
  authenticate: any;
}

class BaseAuthenticatedView extends React.Component<BaseAuthenticatedViewProps> {
  componentDidMount(): void {
    this.props.authenticate("saifulss85@gmail.com", "secret");
  }

  render() {
    return (
      <div>
        {this.props.component}
      </div>
    );
  }
}

const mapDispatchToProps = {authenticate};

export const AuthenticatedView = connect(null, mapDispatchToProps)(BaseAuthenticatedView);
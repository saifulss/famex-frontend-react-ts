import * as React from 'react';
import {Component} from 'react';
import {Link} from "react-router-dom";

interface HomeViewProps {
  // prop1: number;
  // prop2: string;
}

interface HomeViewState {
  // stateItem1: boolean;
}

export class HomeView extends Component<HomeViewProps, HomeViewState> {
  // constructor(props: HomeViewProps) {
  //   super(props);
  //   this.state = {
  //     stateItem1: false
  //   };
  // }

  render() {
    return (
      <div>
        HomeView

        <div>
          <Link to="/">Home</Link>
          <Link to="/expense-claims">Claims</Link>
          <Link to="/expense-claims/1">Claim details</Link>
          <Link to="/expense-claims/create">Create claim</Link>
        </div>
      </div>
    );
  }
}
import * as React from 'react';
import {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {InitialReduxStoreState} from "../store/store";
import {clearLocalData} from "../store/action-creators";


interface HomeViewState {}

type HomeViewProps = {
  initialCount?: number;
  onSomeEvent?: (someCode: string) => void
};

class BaseHomeView extends Component<HomeViewProps, HomeViewState> {
  // constructor(props: HomeViewProps) {
  //   super(props);
  //   this.state = {
  //     stateItem1: false
  //   };
  // }

  componentDidMount(): void {
    console.log(this.props);

    if (this.props.onSomeEvent !== undefined) this.props.onSomeEvent('015');
    else throw new Error("Why are you undefined, silly prop?");
  }

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

const mapStateToProps = (state: InitialReduxStoreState) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch: any) => ({
  onSomeEvent: (someCode: string) => dispatch(clearLocalData(someCode))
});

export const HomeView = connect(mapStateToProps, mapDispatchToProps)(BaseHomeView);
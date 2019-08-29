import * as React from 'react';
import {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchUsers} from "../store/user/actions";

interface HomeViewState {}

type HomeViewProps = {
  initialCount?: number;
  onTimeToRunSomeSynchronousTask?: (someCode: string) => void;
  onTimeToRunSomeAsyncTask?: (something: string) => void;
  fetchUsers: typeof fetchUsers;
};

class BaseHomeView extends Component<HomeViewProps, HomeViewState> {
  onButtonClick = () => {
    console.log('clicked');

    this.props.fetchUsers([{displayName: "xxx", email: "xxx@xxx.com"}])
  };

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

        <button onClick={this.onButtonClick}>Send Message</button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  users: state.users,
});

// const mapDispatchToProps = (dispatch: any) => ({
//   sendMessage: (message: Message): ChatActionTypes => dispatch(sendMessage(message))
// });

const mapDispatchToProps = {fetchUsers};

export const HomeView = connect(mapStateToProps, mapDispatchToProps)(BaseHomeView);
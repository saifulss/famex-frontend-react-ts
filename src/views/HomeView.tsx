import * as React from 'react';
import {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {InitialReduxStoreState} from "../redux/store/store";
import {clearLocalData, fetchUsers} from "../redux/actions/action-creators";
import {sendMessage} from "../store/chat/actions";
import {ChatActionTypes, Message} from "../store/chat/types";

interface HomeViewState {}

type HomeViewProps = {
  initialCount?: number;
  onTimeToRunSomeSynchronousTask?: (someCode: string) => void;
  onTimeToRunSomeAsyncTask?: (something: string) => void;
  sendMessage: typeof sendMessage
};

class BaseHomeView extends Component<HomeViewProps, HomeViewState> {
  // constructor(props: HomeViewProps) {
  //   super(props);

  // this.state = {
  //   stateItem1: false
  // };
  // }

  componentDidMount(): void {
    if (this.props.onTimeToRunSomeSynchronousTask !== undefined) this.props.onTimeToRunSomeSynchronousTask('015');
    else throw new Error("Why are you undefined, silly prop?");

    if (this.props.onTimeToRunSomeAsyncTask !== undefined) this.props.onTimeToRunSomeAsyncTask('meta-meta');
    else throw new Error("Why are you undefined, silly prop?");
  }

  onButtonClick = () => {
    console.log('clicked');
    this.props.sendMessage({
      message: 'hello',
      user: 'john doe',
      timestamp: 123
    })
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

const mapStateToProps = (state: InitialReduxStoreState) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch: any) => ({
  onTimeToRunSomeSynchronousTask: (something: string) => dispatch(clearLocalData(something)),
  onTimeToRunSomeAsyncTask: (something: string) => dispatch(fetchUsers(something)),
  sendMessage: (message: Message): ChatActionTypes => dispatch(sendMessage(message))
});

export const HomeView = connect(mapStateToProps, mapDispatchToProps)(BaseHomeView);
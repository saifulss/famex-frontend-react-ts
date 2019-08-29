import * as React from 'react';
import {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
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

const mapStateToProps = (state: any) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch: any) => ({
  sendMessage: (message: Message): ChatActionTypes => dispatch(sendMessage(message))
});

export const HomeView = connect(mapStateToProps, mapDispatchToProps)(BaseHomeView);
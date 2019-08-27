import * as React from 'react';
import {Component} from 'react';
import {match} from 'react-router-dom';

export interface ViewExpenseClaimViewProps {
  match?: match<Identifiable>,
  // prop1: number;
  // prop2: string;
}

interface ViewExpenseClaimViewState {
  // stateItem1: boolean;
}

interface Identifiable {
  id: string;
}

export class ViewExpenseClaimView extends Component<ViewExpenseClaimViewProps, ViewExpenseClaimViewState> {
  // constructor(props: ViewExpenseClaimViewProps) {
  //   super(props);
  //   this.state = {
  //     stateItem1: false
  //   };
  // }

  render() {
    if (this.props.match === undefined) return <div>Router not yet loaded.</div>;

    return (
      <div>
        ViewExpenseClaimView {this.props.match!!.params.id}
      </div>
    );
  }
}
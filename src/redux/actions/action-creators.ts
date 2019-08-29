import {ACTION_TYPES} from "./actions";

export interface clearLocalData {
  type: string,
  canBeAnything: string
}

export const clearLocalData = (something: string): clearLocalData => {
  // console.log('action creator will return action now');
  return {
    type: ACTION_TYPES.CLEAR_LOCAL_DATA,
    canBeAnything: something
  };
};

const somePromiseToSimulateANetworkCall = new Promise((resolve, reject) => {
  // console.log('starting timer...');
  setTimeout(() => {
    console.log('got result!');
    resolve('some result');
  }, 10000);
});

export const fetchUsers = (someArgumentFromCallingCode: string): any => {
  return (dispatch: any, getState: any) => {
    // console.log(getState());  // just to prove that we can actually get a handle on the Redux store state here, courtesy of redux-thunk

    somePromiseToSimulateANetworkCall.then(result => {
      dispatch({
        type: ACTION_TYPES.UPDATE_USERS,
        payload: result + someArgumentFromCallingCode
      })
    });
  };
};

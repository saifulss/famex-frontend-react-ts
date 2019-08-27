import {ACTION_TYPES} from "./actions";

export interface clearLocalData {
  type: string,
  someCode: string
}

export const clearLocalData = (someCode: string): clearLocalData => {
  console.log('action creator will return action now');
  return {
    type: ACTION_TYPES.CLEAR_LOCAL_DATA,
    someCode: someCode
  };
};

export interface fetchUsers {
  type: string,
  someMetaDescribingTheNetworkCall: string
}

export const fetchUsers = (something: string): fetchUsers => {
  return {
    type: ACTION_TYPES.FETCH_USERS,
    someMetaDescribingTheNetworkCall: something
  };
};

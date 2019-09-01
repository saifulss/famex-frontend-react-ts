import {UPDATE_FETCHED_USERS, User} from "./types";
import axios from 'axios';
import {ApiConstants} from "../../constants/ApiConstants";
import {Dispatch} from "redux";

// thunk
export function fetchUsers() {
  return (dispatch: Dispatch) => {  // todo: put generic types for that Dispatch typing
    axios.get(`${ApiConstants.BASE_URL}/users`)
      .then((results) => {
        console.log(results);
        dispatch(updateFetchedUsers(results.data));
      });
  }
}

function updateFetchedUsers(users: User[]) {
  return {
    type: UPDATE_FETCHED_USERS,
    users
  };
}
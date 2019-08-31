import {UPDATE_FETCHED_USERS, User} from "./types";
import axios from 'axios';
import {ApiConstants} from "../../constants/ApiConstants";

// thunk
export function fetchUsers() {
  return (dispatch: any) => {
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
import {STORE_CURRENT_USER, UPDATE_FETCHED_USERS, User} from "./types";
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

export function storeCurrentUser(currentUser: User) {
  return {
    type: STORE_CURRENT_USER,
    currentUser
  };
}

// this action-creator is a thunk
// i.e. instead of returning an action object,
// it returns a function
// export const fetchUsers = () => {
//   return (dispatch: any) => {
//     // start the promise here
//   };
// };

// when this function is called, it will make a console log and start a promise that will,
// 5 seconds later, resolve with an array of 2 User objects.
// export const mockAsyncCall = () => {
//   console.log('starting call...');
//
//   return new Promise<User[]>((resolve) => {
//     setTimeout(() => {
//       console.log('call finished');
//       resolve([
//         {
//           displayName: "111",
//           email: "111@111.com"
//         },
//         {
//           displayName: "222",
//           email: "222@222.com"
//         },
//       ]);
//     }, 5000);
//   });
// };
import {FETCH_USERS, FetchUsersAction, User} from "./types";

export const fetchUsers = (users: User[]): FetchUsersAction => ({
  type: FETCH_USERS,
  users
});

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
export const mockAsyncCall = () => {
  console.log('starting call...');

  return new Promise<User[]>((resolve) => {
    setTimeout(() => {
      console.log('call finished');
      resolve([
        {
          displayName: "111",
          email: "111@111.com"
        },
        {
          displayName: "222",
          email: "222@222.com"
        },
      ]);
    }, 5000);
  });
};
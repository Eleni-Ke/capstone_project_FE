import { IUser } from "../interfaces/IUser";

export const SET_USER_INFO = "SET_USER_INFO";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

// export const setUserInfo = (user: IUser) => {
//   return {
//     type: SET_USER_INFO,
//     payload: { userInfo: user },
//   };
// };

export const setCurrentUser = (currentUser: IUser) => {
  return {
    type: SET_CURRENT_USER,
    payload: currentUser,
  };
};

// export const getUsers = () => {
//   return async (dispatch: any) => {
//     try {
//       const res = await fetch(`${process.env.REACT_APP_BE_URL}/users`);
//       if (res.ok) {
//         const data = await res.json();
//         // console.log(data);
//         dispatch({
//           type: SET_USER_INFO,
//           payload: data,
//         });
//       } else {
//         console.log("Error fetching users!");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
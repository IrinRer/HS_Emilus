import { FETCH_USERS, USER_DELETE } from "redux/constants/Users";

export const fetchUsersAction = (user) => {
    return {
      type: FETCH_USERS,
      payload: user
    };
};

export const deleteUserAction = (user) => {
    return {
        type: USER_DELETE,
        payload: user
    }
}

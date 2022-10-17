import { message } from "antd";
import { FETCH_USERS, USER_DELETE } from "redux/constants/Users";

const initState = {
  loading: false,
  users: [],
};

const users = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
        users: action.payload,
      };
    case USER_DELETE:
      const newUser = state.users.filter((item) => item.id !== action.payload);
      console.log(newUser);
      message.success({
        content: `Deleted user ${action.payload}`,
        duration: 2,
      });
      return {
        ...state,
        loading: true,
        users: newUser,
      };

    default:
      return state;
  }
};

export default users;

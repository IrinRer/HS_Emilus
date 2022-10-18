import { combineReducers } from "redux";
import Scheduler from "./Scheduler";
import Auth from "./Auth";
import Theme from "./Theme";
import Users from "./Users";

const reducers = combineReducers({
  theme: Theme,
  auth: Auth,
  users: Users,
  scheduler: Scheduler,
});

export default reducers;

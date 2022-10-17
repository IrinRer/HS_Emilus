import { call, put } from "redux-saga/effects";
import { fetchUsersAction } from "redux/actions/Users";
import exampleService from "services/ExampleService";

export function* fetchUsers() {
  try {
    const users = yield call(exampleService.getUsers);
    yield put(fetchUsersAction(users));
  } catch (err) {
    yield put(fetchUsersAction(err));
  }
}

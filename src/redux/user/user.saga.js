import { all, call, put, takeLatest } from "redux-saga/effects";

import t from "./user.types";
import { getUserListSuccess, getUserListFailure } from "./user.actions";
import api from "api/api";

export function* getList() {
  try {
    const list = yield call(api.getUsers);

    yield put(getUserListSuccess(list));
  } catch (error) {
    yield put(getUserListFailure(error));
  }
}

export function* onGetListStart() {
  yield takeLatest(t.GET_USER_LIST_START, getList);
}

export function* userSagas() {
  yield all([call(onGetListStart)]);
}

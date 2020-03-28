import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import t from "./auth.types";
import { loginSuccess, loginFailure } from "./auth.actions";
import api from "../../api/api";

export function* login({ payload: credentials }) {
  try {
    const token = yield call(api.login, credentials);

    axios.defaults.headers.common["token"] = token;

    yield put(loginSuccess(token));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* onLoginStart() {
  yield takeLatest(t.LOGIN_START, login);
}

export function* authSagas() {
  yield all([call(onLoginStart)]);
}

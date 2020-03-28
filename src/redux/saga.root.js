import { all, call } from "redux-saga/effects";

import { authSagas } from "./auth/auth.saga";

export default function* sagaRoot() {
  yield all([call(authSagas)]);
}

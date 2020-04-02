import { all, call } from "redux-saga/effects";

import { authSagas } from "./auth/auth.saga";
import { userSagas } from "./user/user.saga";

export default function* sagaRoot() {
  yield all([call(authSagas), call(userSagas)]);
}
